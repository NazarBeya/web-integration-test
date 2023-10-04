import styles from './levelBar.module.css'
import React from 'react'

interface Props {
    level: string
    exp: string
  }

export default function LevelBar({level,exp}:Props) {
  return (
    <div className={styles['container']}>
      <div className={styles['level-container']}>
        <p className={styles['level-label']}>
            {level}
        </p>
      </div>

      <div className={styles['progresbar']}>
        <div className={styles['progres']}/>

        <p className={styles['exp-label']}>
            {exp}
        </p>
      </div>
    </div>
  )
}
