import { configureStore } from "@reduxjs/toolkit";
import favoriteMoviesReducer from "./favoriteMoviesSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesReducer,
    user: userReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem(
    "favoriteMovies",
    JSON.stringify(state.favoriteMovies.movies)
  );
  localStorage.setItem("profiles", JSON.stringify(state.user.profiles));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
