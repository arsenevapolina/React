import React, { useState } from "react";
import Button from "../../components/Button/Button";
import button from "../../components/Button/Button.module.css";
import SearchInput from "../../components/SearchInput/SearchInput";
import Title from "../../components/Title/Title";
import styles from "./AuthorizationForm.module.css";

function AuthorizationForm({ onLogin, loggedInUser }) {
  const [userName, setUserName] = useState("");

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleLogin = () => {
    if (userName) {
      onLogin(userName);
      setUserName("");
    }
    console.log("Кнопка была нажата");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLogin();
    }
  };

  return (
    <div className={styles["form-wrapper"]}>
      <Title>Вход</Title>
      <SearchInput
        placeholder="Ваше имя"
        value={userName}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <Button
        onClick={handleLogin}
        className={`${button["button-base"]} ${button.accent}`}
      >
        {loggedInUser ? "Выйти" : "Войти в профиль"}
      </Button>
    </div>
  );
}

export default AuthorizationForm;
