import React from "react";
import styles from "./Poster.module.css"; 

const Poster = ({ src, alt }) => {
  return <img src={src} alt={alt} className={`${styles['movie-poster']}`} />;
};

export default Poster;
