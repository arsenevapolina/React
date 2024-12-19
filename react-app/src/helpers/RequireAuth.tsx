import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; 

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const loggedInUser = useSelector(
    (state: RootState) => state.user.loggedInUser
  );

  if (!loggedInUser) {
    return <Navigate to="/auth/login" replace />;
  }
  return <>{children}</>;
};
