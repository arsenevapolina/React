// import React, { MouseEvent, useEffect } from "react";
// import { useUserContext } from "../../../components/context/UserContext";
// import Header from "../../../components/Header/Header";
// import Navbar from "../../../layouts/Navbar/Navbar";
// import Links from "../../../components/Links/Links";
// import Button from "../../../components/Button/Button";
// import styles from "./AuthLayout.module.css";
// import button from "../../../components/Button/Button.module.css";
// import { Outlet, useLocation } from "react-router-dom";
// import { AuthLayoutProps } from "./AuthLayout.types";

// export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
//   const location = useLocation();

//   useEffect(() => {
//     console.log(location);
//   }, [location]);

//   const { loggedInUser, handleLogout } = useUserContext();

//   const handleCounterClick = (e: MouseEvent<HTMLAnchorElement>): void => {
//     e.preventDefault();
//     console.log("Счётчик был нажат");
//   };

//   return (
//     <div className={styles.app}>
//       <Header>
//         <Navbar>
//           <Links to="/">Поиск фильмов</Links>
//           {loggedInUser ? (
//             <>
//               <Links
//                 to="/favorites"
//                 count={2}
//                 onCounterClick={handleCounterClick}
//               >
//                 Мои фильмы
//               </Links>
//               <Links to="/profile" img="../public/icons/avatar.svg">
//                 {loggedInUser}
//               </Links>
//               <Links to="/login">
//                 <Button onClick={handleLogout}>Выйти</Button>
//               </Links>
//             </>
//           ) : (
//             <Links to="/login">
//               Войти
//               <Button
//                 img="../public/icons/entrance.svg"
//                 onClick={() => console.log("Кнопка была нажата")}
//                 className={button["button-link"]}
//               />
//             </Links>
//           )}
//         </Navbar>
//       </Header>
//       <div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };


import React, { MouseEvent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../../components/Header/Header";
import Navbar from "../../../layouts/Navbar/Navbar";
import Links from "../../../components/Links/Links";
import Button from "../../../components/Button/Button";
import styles from "./AuthLayout.module.css";
import button from "../../../components/Button/Button.module.css";
import { Outlet, useLocation } from "react-router-dom";
import { AuthLayoutProps } from "./AuthLayout.types";
import { logoutUser } from "../../../store/userSlice"; 

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch(); 
  const loggedInUser = useSelector((state) => state.user.loggedInUser); 

  useEffect(() => {
    console.log(location);
  }, [location]);

  const handleCounterClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    console.log("Счётчик был нажат");
  };

  const handleLogout = () => {
    dispatch(logoutUser()); 
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
              <Links to="/profile" img="../public/icons/avatar.svg">
                {loggedInUser}
              </Links>
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