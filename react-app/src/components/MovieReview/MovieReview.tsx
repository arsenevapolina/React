import React from "react";
import styles from "../../pages/MovieDetails/MovieDetails.module.css";
import { MovieReviewProps } from "./MovieReview.types";

const MovieReview: React.FC<MovieReviewProps> = ({ title, date, body }) => (
  <div className={styles["review-wrapper"]}>
    <div className={styles["heading"]}>
      <div className={styles["review"]}>{title}</div>
      <div className={styles["info"]}>{date}</div>
    </div>
    {body && <p className={styles["text"]}>{body}</p>}
  </div>
);

export default MovieReview;
