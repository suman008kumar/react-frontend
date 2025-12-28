import ModalWrapper from "../common/ModalWrapper";
import "../../styles/about.css";

export default function AboutModal({ onClose }) {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="about-box">
        <img
          src="/Aboutimg/Ab.jpeg"
          className="owner-img"
          alt="Chandra Shekhar"
        />

        <h2>CHANDRA SHEKHAR</h2>

        <p>
          This platform is presented and managed by <strong>Chandra Shekhar</strong>,
          who represents the vision, concept, and overall direction of the CHANDRA SHEKHAR platform.
        </p>

        <p>
          The CHANDRA SHEKHAR platform has been <strong>designed and developed by Suman Kumar</strong>,
          focusing on performance, clean user experience, and TV-first design principles.
        </p>

        <p>
          <strong>Development & Technology:</strong><br />
          React.js (Frontend), Java & Spring Boot (Backend), REST-based Architecture
        </p>
      </div>
    </ModalWrapper>
  );
}
