import React from 'react';
import { Link } from 'react-router-dom';
import styles from './appBar.module.css';
import clsx from 'clsx';

const AppBar: React.FC = () => {
  return (
    <header className={styles.appBar}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logo}>
          Authentic Food
        </Link>
      </div>
      
      <nav className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/menu" className={styles.navLink}>Menu</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
      </nav>
      
      <div className={styles.authButtons}>
        <Link to="/login" className={styles.loginButton}>Login</Link>
        <Link to="/signup" className={styles.signupButton}>Sign Up</Link>
      </div>
    </header>
  );
};

export default AppBar;
