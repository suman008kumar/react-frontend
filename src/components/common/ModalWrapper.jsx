import "../../styles/modal.css";

export default function ModalWrapper({ children, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>✕</span>
        {children}
      </div>
    </div>
  );
}
