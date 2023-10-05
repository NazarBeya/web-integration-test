import React from 'react';
import styles from './header.module.css';
import {Logo} from '@/desingSystem/index'
import { iconsArr } from './helper';

// header for main page render
function Header() {
  return (
    <header className={styles.header}>
        <div className={styles['header-container']}>
            <Logo/>
            <div className={styles['social-container']}>  {/* displaying icons for social networks */}
              {iconsArr.map((icon) => (
                <div className={styles['icon-container']} >
                  {icon.img}
                </div>
              ))}
            </div>
        </div>
    </header>
  );
}

export default Header;
