import React, { ForwardRefRenderFunction, ReactElement } from 'react';
import styles from './input.module.scss';

interface InputProps {
    name: string;
    label: string;
    ref: string;
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    type: string,
    onClickIconRight?() : void,
    onClickIconLeft?() : void,
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, type, startIcon, endIcon, onClickIconRight, onClickIconLeft, ...otherProps }
, ref) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <label>{label}</label>}
      <div className='input-group'>
        {startIcon && <div className='icon left' onClick={onClickIconLeft}>{startIcon}</div>}
        <input
          type={type}
          {...otherProps}
          name={name}
          ref={ref}
        />
        {endIcon && <div className='icon right' onClick={onClickIconRight}>{endIcon}</div>}
      </div>
    </div>
    );
};

const FormInput = React.forwardRef(Input);

export default FormInput;