import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const FavoriteCount: React.FC = () => {
  const favoriteMovies = useSelector(
    (state: RootState) => state.favoriteMovies.movies
  );

  return <div>Избранное: {favoriteMovies.length}</div>;
};

export default FavoriteCount;
