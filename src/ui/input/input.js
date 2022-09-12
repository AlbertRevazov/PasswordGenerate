import React from 'react'
import cx from 'clsx'
import styles from './input.module.css'

function Input({ type, name, placeholder, onChange, defaultValue, disabled, className, readonly}) {
  return (
    <input 
    name={name}
    type={type}
    placeholder={placeholder}
    defaultValue={defaultValue}
    disabled={disabled}
    className={cx(styles['input'],className)}
    readOnly={readonly}
    onChange={onChange}
    />
  )
}

export {Input}
