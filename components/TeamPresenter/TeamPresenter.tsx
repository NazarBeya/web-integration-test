import React from 'react'
import styles from './teamPresenter.module.css'

interface Props {
    image: string
    label: string
}

export default function TeamPresenter({image,label}:Props) {
  return (
    <div className={styles['container']}>
        <img className={styles['icon-size']} src={image} alt="error" />
        <p className={styles['label']}> {label} </p>
    </div>
  )
}
