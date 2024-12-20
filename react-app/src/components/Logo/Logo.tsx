import React from "react";
import styles from "./Logo.module.css";
import { LogoProps } from "./Logo.types";

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`${styles["logo-link"]} ${className}`}>
      <img
        className={styles.logo}
        src="../public/icons/logo.svg"
        alt="Логотип"
      />
    </div>
  );
};

export default Logo;
