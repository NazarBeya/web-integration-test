import styles from './menuItem.module.css'

import React, { ReactElement } from 'react'

interface Props {
    icon: ReactElement
    label: string
    isActive?: boolean
    onClick?: React.MouseEventHandler<HTMLDivElement> 
}

export default function MenuItem({icon,label,isActive, onClick}:Props) {
    const Active = isActive || false
    return (
    <div onClick={onClick} className={`${styles['container']} ${Active ? styles['active-item'] : '' }`}>

        <div className={styles['icon-size']}>
            {icon}
        </div>

        <p className={Active ? styles['active-label'] : styles['inactive-label']}> {label} </p>
    </div>
  )
}
