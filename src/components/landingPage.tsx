// components/LandingPage.jsx
import React from "react";
import styles from "./landingPage.module.css";
import clsx from "clsx";

const LandingPage = () => {
  return (
    <div className={styles.landingWrapper}>
      <h1 className={styles.title}>Welcome to Authentic Food</h1>
      <p className={styles.subtitle}>
        Discover the joy of handmade, delicious, and authentic dishes — served fresh and with love!
      </p>
      <div className={styles.buttonContainer}>
        <a href="/signup">
          <button className={styles.primaryButton}>Get Started</button>
        </a>
        <a href="/login">
          <button className={styles.secondaryButton}>Login</button>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;