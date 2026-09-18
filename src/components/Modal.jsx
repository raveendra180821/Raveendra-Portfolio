import { useEffect, useRef } from "react";

export default function Modal({ title, onClose, children }) {
  const closeRef = useRef(null);
  const lastRef = useRef(null);

  useEffect(() => {
    lastRef.current = document.activeElement;
    closeRef.current?.focus();
    document.body.classList.add("modal-open");

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
      if (lastRef.current && lastRef.current.focus) lastRef.current.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <h2 id="project-dialog-title">{title}</h2>
          <button
            ref={closeRef}
            className="close-btn"
            aria-label="Close project details"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
