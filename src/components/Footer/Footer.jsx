import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a className={styles.gitHub} href="https://github.com/ScribaSSU/scriba-schedule-comparison">GitHub</a>
        </footer>
    );
}

export default Footer;