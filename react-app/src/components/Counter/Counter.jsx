import styles from "./Counter.module.css";

function Counter({ count, onClick }) {
  return (
    <button className={styles.counter} onClick={onClick}>
      {count}
    </button>
  );
}

export default Counter;