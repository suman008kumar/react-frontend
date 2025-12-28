import ModalWrapper from "../common/ModalWrapper";

export default function ContactModal({ onClose }) {
  return (
    <ModalWrapper onClose={onClose}>
      <h2>Contact Us</h2>
      <p>For any support, feedback, or technical issues, feel free to reach us.</p>
      <p>📧 Support Email: drChandra@gmail.in</p>
      <p>📞 Support Phone: +91-700425****</p>
      <p>We do not host any TV channels on our servers.
         All content is provided by third-party sources.</p>
    </ModalWrapper>
  );
}
