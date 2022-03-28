import React from "react";
import style from "./Button.module.scss";;

interface IButtonProps {
  children?: React.ReactNode;
  props?: any;
  onClick?: any;
  extraClass?: string,
  disabled?: boolean
}

const Button: React.FC<IButtonProps> = ({ onClick, children, extraClass, disabled, ...props }) => {
    return (
        <button disabled={disabled} className={`button ${style.button} ${extraClass && style[extraClass]}`} {...props} onClick={onClick}>
          {children}
        </button>
    );
};

export default React.memo(Button);