import styles from './userResources.module.css'
import React from 'react'
import GameCurrency from '../GameCurrency/GameCurrency'
// import Souls from '@/assets/resourceIcon/Souls.png'
// import Coin from '@/assets/resourceIcon/GoldCoin.png'
// import Sapphife from '@/assets/resourceIcon/Sapphire.png'
import { CoinIcon, SapphireIcon, SoulIcon } from '@/desingSystem'

export default function UserResources() {
  const soulStyle = {
    top: '-10px',
  };
  return (
    <div className={styles['container']}>
      <GameCurrency icon={<CoinIcon/>} value='12,345'/>
      <GameCurrency icon={<SapphireIcon/>} value='143'/>
      <GameCurrency icon={<SoulIcon/>} value='3/5' iconStyle = {soulStyle}/>
    </div>
  )
}
