import styles from "./Button.module.css";
import { forwardRef } from "react";
import { ButtonProps } from "./Button.props"; 

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ onClick, children, className, img }, ref) => {
        const buttonClass = `${styles.button} ${className || ""}`.trim();

        return (
            <button ref={ref} onClick={onClick} className={buttonClass}>
                {img && <img src={img} alt="Кнопка" className={styles.buttonImage} />}
                {children}
            </button>
        );
    }
);

export default Button;

