import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';
import styles from './main-header.module.css';
import MainHeaderBackground from './main-header-background';

const MainHeader = () => {
  console.log('Main Header Executing');
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo.src} alt="logo" width={200} height={200} priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/community">Community</Link>
            </li>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
