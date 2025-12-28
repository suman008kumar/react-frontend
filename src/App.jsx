import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

export default function App() {
  const [channels, setChannels] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);

  // 🔹 Load channels once
  useEffect(() => {
    fetch("https://tv-streaming-platform-production.up.railway.app/api/channels")
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

  // 🔍 Search = reorder only
  const handleSearch = (query) => {
    const q = query.toLowerCase().trim();

    if (!q) {
      setFiltered([...channels]);
      return;
    }

    const matched = channels.filter(ch =>
      ch.name.toLowerCase().includes(q)
    );

    const others = channels.filter(
      ch => !ch.name.toLowerCase().includes(q)
    );

    setFiltered([...matched, ...others]);
  };

  return (
    <>
      {/* 🔒 FIXED NAVBAR */}
      <Navbar onSearch={handleSearch} />

      {/* 🔒 STICKY LAYOUT */}
      <div className="app-layout">
        {/* LEFT: VIDEO */}
        <div className="video-container">
          <VideoPlayer channel={selected} />
        </div>

        {/* RIGHT: CHANNEL LIST */}
        <div className="channel-panel">
          <div className="channel-list">
            {filtered.map(ch => (
              <div
                key={ch._id}
                className={`channel-item ${
                  selected?._id === ch._id ? "active" : ""
                }`}
                onClick={() => setSelected(ch)}
              >
                <img
                  src={ch.logo}
                  alt={ch.name}
                  onError={(e) => (e.target.src = "/no-logo.png")}
                />
                <span>{ch.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
