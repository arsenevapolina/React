import styles from "./Logo.module.css"; 
import Link from "../Link/Link";

function Logo() {
  return (
    <Link className={`${styles['logo-link']}`}>
      <img className={styles.logo} src="./public/icons/logo.svg" alt="Логотип" />
    </Link>
  );
}

export default Logo;