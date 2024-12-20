import React from "react";
import styles from "./Poster.module.css";
import { PosterProps } from "./Poster.types";

const Poster: React.FC<PosterProps> = ({ src, alt, size }) => {
  const posterClass = size === "large" ? styles.large : styles.small;

  return (
    <div className={styles["movie-poster"]}>
      <img src={src} alt={alt} className={posterClass} />
    </div>
  );
};

export default Poster;