import ModalWrapper from "../common/ModalWrapper";
import "../../styles/about.css";

export default function AboutModal({ onClose }) {
  return (
    <ModalWrapper onClose={onClose}>

      {/* MAIN ABOUT CONTAINER */}
      <div className="about-box">

        {/* OWNER IMAGE */}
        <img
          src="/Aboutimg/Ab.jpeg"
          alt="Chandra Shekhar"
          className="owner-img"
        />

        {/* OWNER NAME */}
        <h2 className="owner-name">CHANDRA SHEKHAR</h2>

        {/* ROLE / DESCRIPTION */}
        <p className="about-text">
          This platform is presented and managed by{" "}
          <strong>Chandra Shekhar</strong>, who defines the vision,
          concept, and overall direction of the platform.
        </p>

        {/* DEVELOPER INFO */}
        <p className="about-text">
          The platform has been <strong>designed and developed by Suman Kumar</strong>,
          focusing on performance, simplicity, and a TV-first user experience.
        </p>

        {/* TECH STACK */}
        <div className="tech-stack">
          <h4>Development & Technology</h4>
          <p>React.js (Frontend)</p>
          <p>Java & Spring Boot (Backend)</p>
          <p>REST-based Architecture</p>
        </div>

      </div>
    </ModalWrapper>
  );
}
