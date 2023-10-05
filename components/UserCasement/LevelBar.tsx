import styles from './levelBar.module.css'
import React from 'react'

interface Props {
    level: string
    exp: string
  }

// user level info
export default function LevelBar({level,exp}:Props) {
  return (
    <div className={styles['container']}>
      {/* level */}
      <div className={styles['level-container']}>
        <p className={styles['level-label']}>
            {level}
        </p>
      </div>
      {/* progresbar */}
      <div className={styles['progresbar']}>
        <div className={styles['progres']}/>
        {/* experience info */}
        <p className={styles['exp-label']}>
            {exp}
        </p>
      </div>
    </div>
  )
}
