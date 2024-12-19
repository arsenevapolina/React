import { useState, ChangeEvent, KeyboardEvent } from "react";
import Button from "../../components/Button/Button";
import button from "../../components/Button/Button.module.css";
import Paragraph from "../../components/Paragraph/Paragraph";
import Title from "../../components/Title/Title";
import SearchInput from "../../components/SearchInput/SearchInput";
import Form from "../../layouts/Form/Form";
import SectionTitle from "../../layouts/SectionTitle/SectionTitle";
import MovieList from "../../components/MovieList/MovieList"; 
import { PREFIX } from "../../helpers/API";
import { IFilm } from "../../interfaces/movie.interface";
import axios, { AxiosError } from "axios";

const text =
  "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";

export function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [movies, setMovies] = useState<IFilm[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [noResults, setNoResults] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setNoResults(false);
  };

  const handleButtonClick = async (): Promise<void> => {
    if (inputValue) {
      setIsLoading(true);
      setNoResults(false);
      try {
        const moviesData = await fetchMovies(inputValue);
        console.log(moviesData);
        setMovies(moviesData);

        if (moviesData.length === 0) {
          setNoResults(true);
        } 

        setInputValue("");
      } catch (e) {
        console.error("Ошибка при получении данных:", e);
        if (e instanceof AxiosError) {
          setError(e.message);
        }
      } finally {
        setIsLoading(false);
        console.log("Запрос завершен");
      }
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleButtonClick();
    }
  };

  const fetchMovies = async (query: string) => {
    try {
      const response = await axios.get(`${PREFIX}${query}`);
      const data = response.data as IFilm[];
      console.log("Данные из API:", data);

      return data.description || []; 
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      return [];
    }
  };

  return (
    <>
      <SectionTitle>
        <Title>Поиск</Title>
        <Paragraph>{text}</Paragraph>
      </SectionTitle>
      <Form>
        <SearchInput
          img="./public/icons/search.svg"
          placeholder="Введите название"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <Button
          onClick={handleButtonClick}
          text="Искать"
          className={`${button["button-base"]} ${button.accent}`}
        >
          Искать
        </Button>
      </Form>
      <MovieList
        movies={movies}
        isLoading={isLoading}
        error={error}
        noResults={noResults}
      />
    </>
  );
}

