"use client";

import React, { useState } from 'react'
import styles from './teamsSidebar.module.css';
import TeamIcon from '@/components/TeamIcon/TeamIcon';
import { navigationsArr } from './helper'
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';


export default function TeamsSidebar() {

    const params = useSearchParams()
    const search = params.get('team') || navigationsArr[0].label //get active item

    return (
        <div className={styles.sidenav}>
            {navigationsArr.map((team) => (
                <Link href={`?team=${team.label}`} key={team.id}> {/* render sidebar teams icons */}
                    <TeamIcon
                    image={team.image.src}
                    isActive={team.label===search} 
                    />
                </Link>
            ))}
        </div>
    )
}
