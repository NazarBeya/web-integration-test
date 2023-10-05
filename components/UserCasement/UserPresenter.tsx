import React, { ReactElement } from 'react'
import styles from './userPresenter.module.css'

interface Props {
  image: string
  label: string
}
// user avatar + name component
export default function UserPresenter({image,label}:Props) {
return (
  <div className={styles['container']}>
      <img className={styles['icon-size']} src={image} alt="error" />
      <p className={styles['username']}> {label} </p>
  </div>
)
}
