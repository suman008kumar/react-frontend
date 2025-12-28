import "../styles/channelRow.css";

export default function ChannelRow({ channel, active, onClick }) {
  return (
    <div className={`channel-row ${active ? "active" : ""}`} onClick={onClick}>
      <img src={channel.logo || "/no-logo.png"} />
      <span>{channel.name}</span>
    </div>
  );
}
