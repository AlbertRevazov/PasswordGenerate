
import React from 'react'
import styles from './checkbox.module.css'
import cx from 'clsx'

function Checkbox({name, id, className, defaultChecked, onChange}) {
  return (
    <input type='checkbox'
    name={name} id={id} 
    className={cx(styles['checbox'], className)} 
    defaultChecked={defaultChecked} 
    onChange={onChange} ></input>
  )
}

export {Checkbox}
