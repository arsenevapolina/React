import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import button from "../../components/Button/Button.module.css";
import SearchInput from "../../components/SearchInput/SearchInput";
import Title from "../../components/Title/Title";
import styles from "./AuthorizationForm.module.css";
import { RootState } from "../../store/store";
import { logoutUser } from "../../store/userSlice";

interface AuthorizationFormProps {
  onLogin: (userName: string) => void;
}

const AuthorizationForm: React.FC<AuthorizationFormProps> = ({ onLogin }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(
    (state: RootState) => state.user.loggedInUser
  );
  const [userName, setUserName] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleLog = () => {
    if (userName) {
      onLogin(userName);
      localStorage.setItem("loggedInUser", userName);
      setUserName("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLog();
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("loggedInUser");
  };

  const buttonText = loggedInUser ? "Выйти" : "Войти в профиль";

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
        onClick={loggedInUser ? handleLogout : handleLog}
        className={`${button["button-base"]} ${button.accent}`}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default AuthorizationForm;
