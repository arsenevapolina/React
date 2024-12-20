import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Menu/Layout";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import FavoriteMovies from "./pages/Favorites/Favorites";
import { NotFound } from "./pages/NotFound/NotFound";
import { Provider } from "react-redux";
import store from "./store/store"; 

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<FavoriteMovies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;