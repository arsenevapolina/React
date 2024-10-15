import styles from "./Link.module.css";
import Counter from "../Counter/Counter";

function Link({ children, count, onCounterClick, img }) {
  return (
    <div className={styles["link-container"]}>
      <a className={`${styles["link-container"]} ${styles.link}`} href="#">
        {children}
        {img && <img src={img} alt="Аватар" />}
      </a>
      {count !== undefined && (
        <Counter count={count} onClick={onCounterClick} />
      )}
    </div>
  );
}

export default Link;
