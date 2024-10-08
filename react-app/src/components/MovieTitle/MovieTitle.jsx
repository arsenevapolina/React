import React from "react";
import styles from "./MovieTitle.module.css"; 

const Title = ({ text }) => {
  return <h3 className={`${styles['movie-title']}`}>{text}</h3>;
};

export default Title;
