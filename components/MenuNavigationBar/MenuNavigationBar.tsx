import styles from './menuNavigationBar.module.css'
import MenuItem from './MenuItem'
import { navigationsArr } from './helper'

import React, { useState } from 'react'

export default function MenuNavigationBar() {
    const [items, setItems] = useState(navigationsArr);

    const handleClick = (id: number) => {
        const updatedComponents = items.map((item) => ({
          ...item,
          isActive: item.id === id,
        }));
        setItems(updatedComponents);
    };
    
    return (
        <div className={styles['container']}>
            {items.map((item) => (
            item.isActive ? (
                <MenuItem key={item.id} isActive={item.isActive} label={item.label} icon={item.iconActive} onClick={() => handleClick(item.id)}/>
            ) : (
                <MenuItem key={item.id} isActive={item.isActive} label={item.label} icon={item.iconInactive} onClick={() => handleClick(item.id)}/>
            )
            ))}
        </div>
    )
}

