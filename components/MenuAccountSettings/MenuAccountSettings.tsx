import styles from './menuAccountSettings.module.css'
import { AccountIcon, SettingsIcon } from '@/desingSystem'
import MenuItem from '../MenuNavigationBar/MenuItem'

import React from 'react'

// account management in the sidebar
export default function MenuAccountSettings() {
  return (
    <div className={styles['container']}>
        <p className={styles['label']}>Account management</p>
        <MenuItem label='Account' icon={<AccountIcon/>} />
        <MenuItem label='Settings' icon={<SettingsIcon/>} />
    </div>
  )
}
