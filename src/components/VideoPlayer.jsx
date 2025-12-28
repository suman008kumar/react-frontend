import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import "../styles/player.css";

export default function VideoPlayer({ channel }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const hideTimer = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.6);
  const [showControls, setShowControls] = useState(true);

  /* ================= LOAD STREAM ================= */
  useEffect(() => {
    if (!channel) return;
    let hls;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(channel.streamUrl);
      hls.attachMedia(videoRef.current);
    } else {
      videoRef.current.src = channel.streamUrl;
    }

    videoRef.current.volume = volume;
    setIsPlaying(true);

    return () => hls && hls.destroy();
  }, [channel]);

  /* ================= AUTO HIDE CONTROLS ================= */
  const startHideTimer = () => {
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setShowControls(false);
    }, 3000); // 👈 3 sec
  };

  const showControlsNow = () => {
    setShowControls(true);
    startHideTimer();
  };

  useEffect(() => {
    startHideTimer();
    return () => clearTimeout(hideTimer.current);
  }, []);

  /* ================= PLAY / PAUSE ================= */
  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    showControlsNow();
  };

  /* ================= VOLUME ================= */
  const handleVolume = (e) => {
    const v = Number(e.target.value);
    setVolume(v);
    videoRef.current.volume = v;
    showControlsNow();
  };

  /* ================= FULLSCREEN ================= */
  const toggleFullscreen = () => {
    const container = containerRef.current;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      container.requestFullscreen();
    }
    showControlsNow();
  };

  return (
    <div
      ref={containerRef}
      className="video-box"
      onMouseMove={showControlsNow}
      onTouchStart={showControlsNow}
      onClick={showControlsNow}
    >
      <video ref={videoRef} autoPlay />

      {/* CUSTOM CONTROLS */}
      <div className={`controls ${showControls ? "show" : "hide"}`}>
        <button className="control-btn" onClick={togglePlayPause}>
          {isPlaying ? "⏸" : "▶"}
        </button>

        <span className="volume-icon">🔊</span>

        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={handleVolume}
          className="volume-slider"
        />

        <button className="control-btn" onClick={toggleFullscreen}>
          ⛶
        </button>
      </div>
    </div>
  );
}
