import React from "react";
import styles from "./MovieCard.module.css";
import "../Button/Button";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import Poster from "../Poster/Poster"; 
import MovieTitle from "../MovieTitle/MovieTitle";

const MovieCard = ({
  title,
  poster,
  topImage,
  topText,
  bottomImage,
  bottomText,
}) => {
  return (
    <div className={`${styles["movie-card"]}`}>
      <div className={`${styles["poster-wrapper"]}`}>
        <Poster
          src={poster}
          alt={`${title} poster`}
          className={styles.movie - poster}
        />
        <Rating image={topImage} text={topText} />
      </div>
      <MovieTitle text={title} />
      <div className={`${styles["bottom-content"]}`}>
        <Button
          variant="image"
          className={styles["image-button"]}
          onClick={() => console.log("Добавлено в избранное")}
        >
          <img
            src={bottomImage}
            alt="Кнопка добавить"
            className={styles["bottom-image"]}
          />
        </Button>
        <p className={`${styles["bottom-text"]}`}>{bottomText}</p>
      </div>
    </div>
  );
};

export default MovieCard;
