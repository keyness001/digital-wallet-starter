import React, { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";

interface IModalProps {
  children: any
}

const Modal: React.FC<IModalProps> = ({ children }) => {
  const el = useRef<any>(<div></div>);
  
  useEffect(() => {
    const modalRoot = document.querySelector("#modal-root")
    const current = el.current;

    modalRoot!.appendChild(current);
    return () => void modalRoot!.removeChild(current);
  }, []);

  return createPortal(children, el.current);
};

export default React.memo(Modal);