import styles from "./Form.module.css";

function Form({ children }) {
  return <div className={styles.form}>{children}</div>;
}

export default Form;
