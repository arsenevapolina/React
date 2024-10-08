import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from  "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={`${styles['movie-list']}`}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
          topImage={movie.topImage}
          topText={movie.topText}
          bottomImage={movie.bottomImage}
          bottomText={movie.bottomText}
        />
      ))}
    </div>
  );
};

export default MovieList;
