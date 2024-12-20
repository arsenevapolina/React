import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import { MovieListProps } from "./MovieList.types";
import { NotFound } from "../../pages/NotFound/NotFound";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Loader from "../Loader/Loader";

const MovieList: React.FC<MovieListProps> = ({
  movies,
  isLoading,
  error,
  noResults,
}) => {
  const favoriteMovies = useSelector(
    (state: RootState) => state.favoriteMovies.movies
  );

  if (isLoading) {
    return <Loader />;
  }

  if (noResults) {
    return <NotFound />;
  }

  return (
    <div className={`${styles["movie-list"]}`}>
      {error && <>{error}</>}
      {!isLoading &&
        movies.map((movie) => {
          const isFavorite = favoriteMovies.some(
            (favMovie) => favMovie["#IMDB_ID"] === movie["#IMDB_ID"]
          );
          return (
            <MovieCard
              key={movie["#IMDB_ID"]}
              movie={movie}
              isFavorite={isFavorite}
            />
          );
        })}
    </div>
  );
};

export default MovieList;
