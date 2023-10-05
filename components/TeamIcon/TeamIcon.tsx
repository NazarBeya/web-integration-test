"use client";

import React, { ReactElement, useState }  from 'react'
import styles from './teamicon.module.css'

interface Props {
image: string
isActive: boolean
onClick?: React.MouseEventHandler<HTMLDivElement> 
}

// component for sidebar team icon
function TeamIcon({image, isActive, onClick}: Props) {
    
    return (
        <div onClick={onClick} className={styles['team-icon-container']}>
            <div className={`${styles['rectangle']} ${!isActive ? styles['hidden'] : ''}`}/>
            <div className={`${styles['icon']} ${isActive ? styles['active-icon'] : styles['inactive-icon']}`}>
                <div className={styles['active-unborder']}>
                    <img className={styles['icon-size']} src={image} alt="error" />
                </div>
            </div>
        </div>
    )
}

export default TeamIcon

