import React from "react";
import TeamsSidebar from "./TeamsSidebar"
import MenuSidebar from './MenuSidebar'
import styles from './sidebar.module.css'

export default function Sidebar() {
    return(
        <div className={styles['sidebar-container']}>
            <TeamsSidebar/>
            <MenuSidebar/>
        </div>
    )
}