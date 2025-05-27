export default function ModalMessage({ message, onClose }) {
  if (!message) return null;
  if (typeof message !== "string") {
    console.error("ModalMessage: message must be a string");
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
}
