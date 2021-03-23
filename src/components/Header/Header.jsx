import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/img/logo.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.title}>
                    <h1>Scriba Comparison</h1>
                </div>
                <div className={styles.logo}>
                    <img src={logo} alt="logo"></img>
                </div>
            </div>
        </header>
    );
}

export default Header;