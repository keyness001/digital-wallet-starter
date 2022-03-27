import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal: React.FC<{}> = ({ children }) => {
  const el = useRef(document.createElement("div"));
  
  useEffect(() => {
    const modalRoot = document.querySelector("#modal-root")
    const current = el.current;

    modalRoot!.appendChild(current);
    return () => void modalRoot!.removeChild(current);
  }, []);

  return createPortal(children, el.current);
};

export default React.memo(Modal);