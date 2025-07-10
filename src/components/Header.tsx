import styles from "./Header.module.css";
function Header() {
  return (
    <>
      <h1 className={styles.title}>-First React pizza co-</h1>
      <br />
      <br />
      <h2 className={styles.subtitle}>OUR MENU</h2>
      <br />
      <h3 className={styles.hea}>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </h3>
    </>
  );
}
export default Header;
