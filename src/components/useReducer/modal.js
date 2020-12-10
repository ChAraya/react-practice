import React, { useEffect } from "react";

function Modal({ modalContent }) {
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
}

export default Modal;
