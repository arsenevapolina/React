import React from "react";
import styles from "./Rating.module.css";
import { RatingProps } from "./Rating.types"; 

const Rating: React.FC<RatingProps> = ({ text, className }) => {
  return (
    <div className={className}>
      <img src="../public/icons/star.svg" alt="Rating image" className={`${styles["top-image"]}`}/>
      <p className={`${styles["top-text"]}`}>{text}</p>
    </div>
  );
};

export default Rating;