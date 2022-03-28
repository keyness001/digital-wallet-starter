import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface IModalProps {
  children: any
}

const Modal: React.FC<IModalProps> = ({ children }) => {
  const el = useRef<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const modalRoot = document.querySelector("#modal-root");
    el.current = document.createElement('div');
    const current = el.current;
    modalRoot!.appendChild(current);
    setMounted(true);
    return () => {
      modalRoot!.removeChild(current);
      setMounted(false);
    }
  }, []);

  return mounted ? createPortal(children, el.current) : null;
};

export default React.memo(Modal);