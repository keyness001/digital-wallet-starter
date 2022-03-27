import React from "react";
import style from "./Button.module.scss";;

interface IButtonProps {
  children?: React.ReactNode;
  props?: any;
  onClick?: any;
  extraClass?: string,
}

const Button: React.FC<IButtonProps> = ({ onClick, children, extraClass, ...props }) => {
    return (
        <button className={`${style.button} ${extraClass && style[extraClass]}`} {...props} onClick={onClick}>
          {children}
        </button>
    );
};

export default Button;