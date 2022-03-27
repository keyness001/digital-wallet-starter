import React, { ForwardRefRenderFunction, ReactElement } from 'react';
import styles from './input.module.scss';

interface InputProps {
    name: string;
    label: string|ReactElement;
    ref: string;
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    type: string,
    onClickIconRight?() : void,
    onClickIconLeft?() : void,
    disabled?: boolean,
    extraClass?: string,
    required?: boolean
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, type, startIcon, endIcon, onClickIconRight, onClickIconLeft, disabled, extraClass, required }
, ref) => {
  return (
    <div className={`input-wrapper ${styles.inputWrapper} ${disabled ? 'disabled' : '' } ${extraClass ? extraClass : ''}`}>
      {label && <label>{label}</label>}
      <div className='input-group'>
        {startIcon && <div className='icon left' onClick={onClickIconLeft}>{startIcon}</div>}
        <input
          type={type}
          name={name}
          ref={ref}
          disabled={disabled}
          required={required}
        />
        {endIcon && <div className='icon right' onClick={onClickIconRight}>{endIcon}</div>}
      </div>
    </div>
    );
};

const FormInput = React.forwardRef(Input);

export default FormInput;