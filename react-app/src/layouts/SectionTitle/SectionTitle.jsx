import styles from "./SectionTitle.module.css";

function SectionTitle({ children }) {
  return <div className={`${styles['heading-wrapper']}`}>{children}</div>;
}

export default SectionTitle;
