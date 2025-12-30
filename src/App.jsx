import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

export default function App() {
  const [channels, setChannels] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);

  const channelListRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:9090/api/channels")
      .then(res => res.json())
      .then(data => {
        const withId = data.map((ch, i) => ({
          ...ch,
          _id: i + 1
        }));

        setChannels(withId);
        setFiltered(withId);
        setSelected(withId[0]);
      });
  }, []);

  /* 🔍 SEARCH + AUTO SCROLL */
  const handleSearch = (query) => {
    const q = query.toLowerCase().trim();

    if (!q) {
      setFiltered([...channels]);
    } else {
      const matched = channels.filter(ch =>
        ch.name.toLowerCase().includes(q)
      );
      const others = channels.filter(ch =>
        !ch.name.toLowerCase().includes(q)
      );
      setFiltered([...matched, ...others]);
    }

    channelListRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    const idx = filtered.findIndex(c => c._id === selected._id);
    if (idx > 0) setSelected(filtered[idx - 1]);
  };

  const handleNext = () => {
    const idx = filtered.findIndex(c => c._id === selected._id);
    if (idx < filtered.length - 1) setSelected(filtered[idx + 1]);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />

      <div className="app-layout">
        <div className="video-container">
          <VideoPlayer
            channel={selected}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>

        <div className="channel-panel">
          <div className="channel-list" ref={channelListRef}>
            {filtered.map(ch => (
              <div
                key={ch._id}
                className={`channel-item ${
                  selected?._id === ch._id ? "active" : ""
                }`}
                onClick={() => setSelected(ch)}
              >
                <img src={ch.logo} alt={ch.name} />
                <span>{ch.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
