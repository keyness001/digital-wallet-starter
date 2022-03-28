import React, { ForwardRefRenderFunction, ReactElement, useState, useEffect, useImperativeHandle } from 'react';
import styles from './Input.module.scss';

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
    required?: boolean,
    value?: string|number,
}

const Input: ForwardRefRenderFunction<any, InputProps> = (
  { name, label, type, startIcon, endIcon, onClickIconRight, onClickIconLeft, disabled, extraClass, required, value = ''}
, ref) => {
  const [value_, setValue_] = useState(value);

  useEffect(() => {
    setValue_(value)
  }, [value]);

  useImperativeHandle(ref, () => ({
    changeValue: (data) => {
      setValue_(data || 0)
    },
    getValue: () => value_
  }));


  return (
    <div className={`input-wrapper ${styles.inputWrapper} ${extraClass ? extraClass : ''}`}>
      {label && <label className='label'>{label}</label>}
      <div className='input-group'>
        {startIcon && <div className='icon left' onClick={onClickIconLeft}>{startIcon}</div>}
        <input
          value={value_}
          onChange={(e) => setValue_(e.target.value)}
          type={type}
          name={name}
          ref={ref}
          disabled={disabled}
          required={required}
          className={`input ${disabled ? 'disable' : '' }`}
        />
        {endIcon && <div className='icon right' onClick={onClickIconRight}>{endIcon}</div>}
      </div>
    </div>
    );
};

const FormInput = React.forwardRef(Input);

export default React.memo(FormInput);