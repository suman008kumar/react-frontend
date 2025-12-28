import ChannelCard from "./ChannelCard";
import "../styles/channelRow.css";

export default function ChannelRow({ channels, onSelect, activeId, defaultLogo }) {
  return (
    <div className="channel-row">
      {channels.map(ch => (
        <ChannelCard
          key={ch.id}
          channel={ch}
          onClick={() => onSelect(ch)}
          active={ch.id === activeId}
          defaultLogo={defaultLogo}
        />
      ))}
    </div>
  );
}
