import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Menu/Layout";
import { AuthLayout } from "./layout/Menu/Auth/AuthLayout";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import FavoriteMovies from "./pages/Favorites/Favorites";
import { NotFound } from "./pages/NotFound/NotFound";
import { DETAILS } from "./helpers/API";
import axios from "axios";
import { RequireAuth } from "./helpers/RequireAuth";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/favorites",
        element: <FavoriteMovies />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
        errorElement: <>Ошибка</>,
        loader: async ({ params }) => {
          const movieID = params.id;

          try {
            const movieResponse = await axios.get(`${DETAILS}${movieID}`);

            console.log("Ответ API:", movieResponse.data);

            return movieResponse.data;
          } catch (error) {
            console.error("Ошибка при получении данных:", error);
            throw new Error("Не удалось загрузить данные о фильме");
          }
        },
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
} else {
  console.error(`Element with id "root" not found`);
}
