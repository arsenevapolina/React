import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  "#IMDB_ID": string;
  "#IMG_POSTER": string;
  "#AKA": string;
  "#RANK": number;
  "#TITLE": string;
}

interface FavoriteMoviesState {
  movies: Movie[];
}

const loadMoviesFromLocalStorage = (): Movie[] => {
  try {
    const storedMovies = localStorage.getItem("favoriteMovies");
    return storedMovies ? JSON.parse(storedMovies) : [];
  } catch (error) {
    console.error("Ошибка при загрузке фильмов из localStorage:", error);
    return [];
  }
};

const initialState: FavoriteMoviesState = {
  movies: loadMoviesFromLocalStorage(),
};

const favoriteMoviesSlice = createSlice({
  name: "favoriteMovies",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      const existingMovie = state.movies.find(
        (movie) => movie["#IMDB_ID"] === action.payload["#IMDB_ID"]
      );
      if (!existingMovie) {
        state.movies.push(action.payload);
        localStorage.setItem("favoriteMovies", JSON.stringify(state.movies));
      }
    },
    removeMovie: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.movies = state.movies.filter((movie) => movie["#IMDB_ID"] !== id);
      localStorage.setItem("favoriteMovies", JSON.stringify(state.movies));
    },
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
      localStorage.setItem("favoriteMovies", JSON.stringify(action.payload));
    },
  },
});

export const selectFavoriteMoviesCount = (state: {
  favoriteMovies: FavoriteMoviesState;
}) => state.favoriteMovies.movies.length;

export const { addMovie, removeMovie, setMovies } = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;
