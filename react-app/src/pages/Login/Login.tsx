import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import AuthorizationForm from "../../layouts/AuthorizationForm/AuthorizationForm";
import { loginUser } from "../../store/userSlice";

export function Login() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      dispatch(loginUser(storedUser));
    }
  }, [dispatch, location]); 

  const handleLogin = (userName) => {
    dispatch(loginUser(userName));
  };

  return (
    <>
      <AuthorizationForm onLogin={handleLogin} />
    </>
  );
}
