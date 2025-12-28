import ModalWrapper from "../common/ModalWrapper";

export default function TermsModal({ onClose }) {
  return (
    <ModalWrapper onClose={onClose}>
      <h2>Terms & Conditions</h2>

      <ol style={{ paddingLeft: "20px", lineHeight: "1.7" }}>
        <li>
          <strong>Purpose of Platform:</strong><br />
          This platform is created strictly for <b>educational, testing, and demo purposes</b>.
          It is intended to showcase how live TV streaming interfaces work.
        </li>

        <li>
          <strong>Content Ownership:</strong><br />
          All TV channels, logos, trademarks, and stream URLs belong to their
          <b> respective owners</b>. We do not claim ownership of any content.
        </li>

        <li>
          <strong>No Hosting of Content:</strong><br />
          We do <b>not host, store, or upload</b> any video streams or media files
          on our servers. All streams are sourced from publicly available third-party providers.
        </li>

        <li>
          <strong>Availability & Accuracy:</strong><br />
          We do not guarantee that any channel will always be available,
          work smoothly, or be free from interruptions.
        </li>

        <li>
          <strong>Copyright Disclaimer:</strong><br />
          If you are a content owner and believe that any stream violates
          your copyright, please contact us for prompt review and removal.
        </li>

        <li>
          <strong>Liability Limitation:</strong><br />
          We are not responsible for any damages, losses, or legal issues
          arising from the use of this platform.
        </li>

        <li>
          <strong>Changes to Terms:</strong><br />
          These terms may be updated or changed at any time without prior notice.
          Continued use of the platform implies acceptance of the updated terms.
        </li>
      </ol>
    </ModalWrapper>
  );
}
