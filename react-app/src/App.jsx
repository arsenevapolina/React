import React, { useState } from "react";
import styles from "./App.module.css";
import Button from "./components/Button/Button";
import Paragraph from "./components/Paragraph/Paragraph";
import Title from "./components/Title/Title";
import SearchInput from "./components/SearchInput/SearchInput";
import Form from "./layouts/Form/Form";
import SectionTitle from "./layouts/SectionTitle/SectionTitle";
import Link from "./components/Link/Link";
import Header from "./components/Header/Header";
import Navbar from "./layouts/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import movies from "./moviesData";

const text =
  "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log("Кнопка была нажата, value:", inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleButtonClick();
    }
  };

  const handleCounterClick = (e) => {
    e.preventDefault();
    console.log("Счётчик был нажат");
  };

  return (
    <div className={styles.app}>
      <Header>
        <Navbar>
          <Link>Поиск фильмов</Link>
          <Link count={2} onCounterClick={handleCounterClick}>
            Мои фильмы
          </Link>
          <Link img="./public/icons/entrance.svg">Войти</Link>
        </Navbar>
      </Header>
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
          onButtonClick={() => console.log("Кнопка поиска нажата")}
        />
        <Button onClick={handleButtonClick} text="Искать">
          Искать
        </Button>
      </Form>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
