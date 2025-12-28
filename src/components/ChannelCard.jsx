export default function ChannelCard({ channel, active, onClick }) {
  return (
    <div
      className={`channel-card ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <img src={channel.logo || "/no-logo.png"} />
      <span>{channel.name}</span>
    </div>
  );
}
