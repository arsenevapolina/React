import React, { MouseEvent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import Navbar from "../../layouts/Navbar/Navbar";
import Links from "../../components/Links/Links";
import Button from "../../components/Button/Button";
import styles from "./Layout.module.css";
import button from "../../components/Button/Button.module.css";
import { Outlet, useLocation } from "react-router-dom";
import { LayoutProps } from "./Layout.types";
import { logoutUser } from "../../store/userSlice";
import { RootState } from "../../store/store"; 
import { useNavigate } from "react-router-dom"; 


export const Layout: React.FC<LayoutProps> = () => {
  const location = useLocation();
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const loggedInUser = useSelector(
    (state: RootState) => state.user.loggedInUser
  ); 

  useEffect(() => {
    console.log(location);
  }, [location]);

  const handleCounterClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    console.log("Счётчик был нажат");
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className={styles.app}>
      <Header>
        <Navbar>
          <Links to="/">Поиск фильмов</Links>
          {loggedInUser ? (
            <>
              <Links
                to="/favorites"
                count={2}
                onCounterClick={handleCounterClick}
              >
                Мои фильмы
              </Links>
              <Links img="../public/icons/avatar.svg">{loggedInUser}</Links>
              <Links to="/login">
                <Button onClick={handleLogout}>Выйти</Button>
              </Links>
            </>
          ) : (
            <Links to="/login">
              Войти
              <Button
                img="../public/icons/entrance.svg"
                onClick={() => console.log("Кнопка была нажата")}
                className={button["button-link"]}
              />
            </Links>
          )}
        </Navbar>
      </Header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
