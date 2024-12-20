import React from "react";
import styles from "./Loader.module.css"; 

const Loader: React.FC = () => {
  return <div className={styles["text"]}>Загружаем фильмы...</div>;
};

export default Loader;
