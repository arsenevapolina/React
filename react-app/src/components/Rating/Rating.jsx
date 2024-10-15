import React from "react";
import styles from "./Rating.module.css"; 

const Rating = ({ image, text }) => {
  return (
    <div className={`${styles['top-content']}`}>
      <img src={image} alt="Rating image" className={`${styles['top-image']}`} />
      <p className={`${styles['top-text']}`}>{text}</p>
    </div>
  );
};

export default Rating;