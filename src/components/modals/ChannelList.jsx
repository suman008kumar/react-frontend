import "../styles/channelRow.css";

export default function ChannelRow({ channel, active, onClick }) {
  return (
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





  );
}
