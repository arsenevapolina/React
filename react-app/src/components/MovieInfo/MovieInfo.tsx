import React from "react";
import styles from "../../pages/MovieDetails/MovieDetails.module.css";
import { MovieInfoProps } from "./MovieInfo.types";

const MovieInfo: React.FC<MovieInfoProps> = ({ title, value }) => (
  <div className={styles["info-wrapper"]}>
    <div className={styles["title"]}>{title}</div>
    <div className={styles["info"]}>{value}</div>
  </div>
);

export default MovieInfo;
