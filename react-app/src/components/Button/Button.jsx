import styles from "./Button.module.css";
import React, { forwardRef } from "react";

const Button = forwardRef(({ onClick, children, className, img }, ref) => {
  const buttonClass = `${styles.button} ${className || ""}`.trim();

  return (
    <button ref={ref} onClick={onClick} className={buttonClass}>
      {img && <img src={img} alt="Кнопка" className={styles.buttonImage} />}
      {children}
    </button>
  );
});

export default Button;
