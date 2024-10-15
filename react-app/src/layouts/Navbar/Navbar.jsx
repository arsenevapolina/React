import styles from "./Navbar.module.css";

function Navbar({ children }) {
  return <div className={styles.navbar}>{children}</div>;
}

export default Navbar;
