import styles from "./Link.module.css";
import Counter from "../Counter/Counter";

function Link({ children, img, count, onCounterClick }) {
  return (
    <div className={`${styles['link-container']}`}>
      <a className={styles.link} href="#">
        {children}
      </a>
      {count !== undefined && (
        <Counter count={count} onClick={onCounterClick} />
      )}
      {img && (
        <button
          className={`${styles['image-button']}`}
          onClick={() => console.log("Кнопка была нажата")}
        >
          <img src={img} alt="Изображение" />
        </button>
      )}
    </div>
  );
}

export default Link;
