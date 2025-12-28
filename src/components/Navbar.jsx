import { useState } from "react";
import TermsModal from "./modals/TermsModal";
import ContactModal from "./modals/ContactModal";
import AboutModal from "./modals/AboutModal";
import "../styles/navbar.css";

export default function Navbar({ onSearch }) {
  const [openModal, setOpenModal] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openPopup = (type) => {
    setOpenModal(type);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        {/* LEFT */}
        <div className="nav-left">
          <img src="/public/logo/CH.png" alt="Logo" className="nav-logo" />
          <input
            type="text"
            placeholder="🔎 Search.."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        {/* RIGHT (Desktop) */}
        <div className="nav-right desktop-only">
          <span onClick={() => openPopup("terms")}>Terms</span>
          <span onClick={() => openPopup("contact")}>Contact</span>
          <span onClick={() => openPopup("about")}>About</span>
        </div>

        {/* BURGER (Mobile) */}
        <div
          className="burger mobile-only"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <span onClick={() => openPopup("terms")}>Terms</span>
        <span onClick={() => openPopup("contact")}>Contact</span>
        <span onClick={() => openPopup("about")}>About</span>
      </div>

      {/* POPUPS */}
      {openModal === "terms" && <TermsModal onClose={() => setOpenModal(null)} />}
      {openModal === "contact" && (
        <ContactModal onClose={() => setOpenModal(null)} />
      )}
      {openModal === "about" && <AboutModal onClose={() => setOpenModal(null)} />}
    </>
  );
}
