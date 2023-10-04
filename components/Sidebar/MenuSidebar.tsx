'use client'

import React, { useEffect } from 'react'
import styles from './menuSidebar.module.css'
import TeamPresenter from '@/components/TeamPresenter/TeamPresenter'
import UserCasement from '../UserCasement/UserCasement'
import MenuNavigationBar from '../MenuNavigationBar/MenuNavigationBar'
import MenuAccountSettings from '../MenuAccountSettings/MenuAccountSettings'
import { navigationsArr } from './helper'
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation'

export default function MenuSidebar() {
  const navi = navigationsArr;

  const params = useSearchParams()
  const router=useRouter()


  const search = params.get('team') || navigationsArr[0].label

  useEffect(()=>{
    const urlParams=new URLSearchParams(params)
    if(search===null || search===navigationsArr[0].label){
      urlParams.set("team",navigationsArr[0].label)
      router.push("?"+urlParams.toString())
    }
  },[params])

  const id = navigationsArr.find((team)=>team.label === search)?.id 
  const index = id ? id-1:0

  return (
    <div className={styles.sidenav}>
      <div className={styles['user-interface']}>
        <TeamPresenter image={navigationsArr[index]?.image.src} label={navigationsArr[index]?.label}/>
        <UserCasement/>
        <MenuNavigationBar/>
      </div>
      <div>
        <MenuAccountSettings/>
      </div>
    </div>
  )
}
