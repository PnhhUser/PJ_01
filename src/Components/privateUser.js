import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { LoadingComponent } from "./loadingComponent";

export const PrivateUser = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (!isLoading) {
    return <LoadingComponent />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
