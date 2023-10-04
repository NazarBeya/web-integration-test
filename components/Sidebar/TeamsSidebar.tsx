"use client";

import React, { useState } from 'react'
import styles from './teamsSidebar.module.css';
import TeamIcon from '@/components/TeamIcon/TeamIcon';
import { navigationsArr } from './helper'
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';


export default function TeamsSidebar() {
    // const [teams, setTeams] = useState(navigationsArr);

    const params = useSearchParams()
    const search = params.get('team') || navigationsArr[0].label

    // const handleClick = (id: number) => {
    //     const updatedComponents = teams.map((team) => ({
    //       ...team,
    //       isActive: team.id === id,
    //     }));
    //     setTeams(updatedComponents);
    // };

    return (
        <div className={styles.sidenav}>
        {navigationsArr.map((team) => (
            <Link href={`?team=${team.label}`} key={team.id}>
                <TeamIcon
                image={team.image.src}
                isActive={team.label===search}
                // onClick={() => handleClick(team.id)}
                />
            </Link>
        ))}
        </div>
    )
}
