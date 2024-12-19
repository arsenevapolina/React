import React from "react";
import styles from "./MovieTitle.module.css";
import { MovieTitleProps } from "./MovieTitle.types"; 

const Title: React.FC<MovieTitleProps> = ({ text, className }) => {
  return (
    <h3 className={`${styles["movie-title"]} ${className || ""}`}>{text}</h3>
  );
};

export default Title;