import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './appBar.module.css';
import clsx from 'clsx';

const AppBar: React.FC = () => {
  return (
    <header className={styles.appBar}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <NavLink to="/" className={styles.logo}>
          Authentic Food
        </NavLink>
      </div>
      
      {/* Navigation Links */}
      <nav className={styles.navLinks}>
        <NavLink 
          to="/" 
          className={({ isActive }) => clsx(styles.navLink, isActive && styles.activeLink)}
          end
        >
          Home
        </NavLink>
        <NavLink 
          to="/menu" 
          className={({ isActive }) => clsx(styles.navLink, isActive && styles.activeLink)}
        >
          Menu
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => clsx(styles.navLink, isActive && styles.activeLink)}
        >
          About
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => clsx(styles.navLink, isActive && styles.activeLink)}
        >
          Contact
        </NavLink>
      </nav>
      
      {/* Auth Buttons */}
      <div className={styles.authButtons}>
        <NavLink to="/login" className={styles.loginButton}>
          Login
        </NavLink>
        <NavLink to="/signup" className={styles.signupButton}>
          Sign Up
        </NavLink>
      </div>
    </header>
  );
};

export default AppBar;
