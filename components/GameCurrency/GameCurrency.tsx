import styles from './gameCurrency.module.css'
import { Plus } from '@/desingSystem'

import React, { CSSProperties, ReactElement } from 'react'

interface Props {
    icon: ReactElement
    value: string
    iconStyle?: CSSProperties
}

export default function GameCurrency({icon,value,iconStyle}:Props) {
    return (
    <div className={styles['container']}>
        <div className={styles['icon-size']} style={iconStyle}>
            {icon}
        </div>

        <div className={styles['plus-container']}>
            <Plus/>
        </div>

        <div className={styles['value-container']}>
            <p className={styles['value']}> {value} </p>
        </div>
    </div>
  )
}
