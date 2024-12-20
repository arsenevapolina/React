import { useLoaderData } from "react-router-dom";
import { MovieDetailsProps } from "./MovieDetails.types";
import styles from "./MovieDetails.module.css";
import Poster from "../../components/Poster/Poster";
import Rating from "../../components/Rating/Rating";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../../store/favoriteMoviesSlice";
import { useState, useEffect } from "react";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import MovieReview from "../../components/MovieReview/MovieReview";

interface FavoriteMovie {
  "#IMDB_ID": string;
}

export function MovieDetails() {
  const data = useLoaderData<MovieDetailsProps>(); 
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(
    (state: { favoriteMovies: { movies: FavoriteMovie[] } }) =>
      state.favoriteMovies.movies
  ); 

  const movieData = data.short || {};
  const { name, image, description, review, genre, aggregateRating } =
    movieData;
  const movieId = movieData["#IMDB_ID"];

  const isMovieInFavorites = favoriteMovies.some(
    (movie: FavoriteMovie) => movie["#IMDB_ID"] === movieId
  );

  const [isFavorite, setIsFavorite] = useState<boolean>(isMovieInFavorites); 
  useEffect(() => {
    setIsFavorite(isMovieInFavorites);
  }, [favoriteMovies, isMovieInFavorites]);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeMovie({ id: movieId }));
    } else {
      dispatch(addMovie(movieData));
    }
    setIsFavorite((prev) => !prev);
  };

  const durationString = movieData.trailer?.duration || "PT0H0M0S";

  const convertDurationToMinutes = (duration: string): number => {
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const matches = duration.match(regex);

    const hours = parseInt(matches[1] || "0", 10);
    const minutes = parseInt(matches[2] || "0", 10);

    return hours * 60 + minutes;
  };

  const totalMinutes = convertDurationToMinutes(durationString);
  const ratingValue = aggregateRating?.ratingValue || "0";

  return (
    <div className={styles["movie-details"]}>
      <div className={styles["wrapper"]}>
        <p className={styles["p"]}>Поиск фильмов</p>
        <p className={styles["movie-title"]}>{name || "Название не указано"}</p>
      </div>
      <div className={styles["main"]}>
        <Poster
          src={image || "/path/to/default/image.jpg"}
          alt={name || "Нет изображения"}
          size="large"
        />
        <div className={styles["content-wrapper"]}>
          <p className={styles["text"]}>
            {description || "Описание отсутствует"}
          </p>
          <div className={styles["content"]}>
            <Rating
              image="../../public/icons/star.svg"
              text={ratingValue}
              className={styles["rating"]}
            />
            <div className={styles["button"]}>
              <Button
                className={styles["image-button"]}
                onClick={handleToggleFavorite}
              >
                <img
                  src={isFavorite ? "/icons/bookmark.svg" : "/icons/like.svg"}
                  alt={isFavorite ? "В избранном" : "В избранное"}
                  className={styles["add-image"]}
                />
              </Button>
              <p className={isFavorite ? styles.favorite : styles.notFavorite}>
                {isFavorite ? "В избранном" : "В избранное"}
              </p>
            </div>
          </div>
          <MovieInfo
            title="Тип"
            value={movieData["@type"] || "Неизвестный тип"}
          />
          <MovieInfo
            title="Дата выхода"
            value={review?.dateCreated || "Дата не указана"}
          />
          <MovieInfo title="Длительность" value={`${totalMinutes} минут`} />
          <MovieInfo
            title="Жанр"
            value={genre?.length ? genre.join(", ") : "Жанр не указан"}
          />
        </div>
      </div>
      <p className={styles["title-review"]}>Отзывы</p>
      <MovieReview
        title={review?.name || "Без заголовка"}
        date={review?.dateCreated || "Дата не указана"}
        body={review?.reviewBody || "Отзыв отсутствует"}
      />
    </div>
  );
}

