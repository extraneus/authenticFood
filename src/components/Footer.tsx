import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.ftext}>
        We are open from 9 AM to 11 PM. Come meet us or order online
      </p>
      <br />
      <button className={styles.btns}>ORDER NOW</button>
    </div>
  );
}
export default Footer;
