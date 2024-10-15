import styles from "./Header.module.css";
import Logo from "../Logo/Logo";

function Header({ children }) {
  return (
    <div className={styles.header}>
      <Logo />
      {children}
    </div>
  );
}

export default Header;
