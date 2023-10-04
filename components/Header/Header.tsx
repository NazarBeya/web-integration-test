import React from 'react';
import styles from './header.module.css';
import {Logo, Twitter, Twitch, TikTok, YouTube, Instagram, Facebook, Discord} from '@/desingSystem/index'

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles['header-container']}>
            <Logo/>

            <div className={styles['social-container']}>
                <Twitter/>
                <Twitch/>
                <TikTok/>
                <YouTube/>
                <Instagram/>
                <Facebook/>
                <Discord/>
            </div>
        </div>
    </header>
  );
}

export default Header;
