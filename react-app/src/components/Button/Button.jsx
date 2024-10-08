import React from "react";
import styles from "./Button.module.css";

function Button({ onClick, children, className, variant }) {
  const buttonClass =
    variant === "image"
      ? className
      : `${styles.button} ${styles.accent} ${className}`;

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}

export default Button;