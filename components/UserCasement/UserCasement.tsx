import React from 'react'
import styles from './userCasement.module.css'
import UserPresenter from './UserPresenter'
import LevelBar from './LevelBar';
import UserResources from './UserResources';
import Avatar from '@/assets/teamsIcon/Avatar.png';

export default function UserCasement() {
  return (
    <div className={styles['container']}>
      <UserPresenter image={Avatar.src} label='Seer'/>
      <LevelBar level="15" exp = "2332/19433"/>
      <UserResources/>
    </div>
  )
}
