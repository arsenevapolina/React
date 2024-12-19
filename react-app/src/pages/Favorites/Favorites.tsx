import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import MovieCard from "../../components/MovieCard/MovieCard";
import Title from "../../components/Title/Title";
import styles from "./Favorites.module.css";

const FavoriteMovies: React.FC = () => {
  const favoriteMovies = useSelector(
    (state: RootState) => state.favoriteMovies.movies
  );

  return (
    <div>
      <Title>Избранное</Title>
      {favoriteMovies.length > 0 ? (
        <div className={styles["movie-list"]}>
          {favoriteMovies.map((movie) => (
            <MovieCard
              key={movie["#IMDB_ID"]}
              movie={movie}
              isFavorite={true}
            />
          ))}
        </div>
      ) : (
        <p className={styles["text"]}>Добавьте фильмы в избранное</p>
      )}
    </div>
  );
};

export default FavoriteMovies;