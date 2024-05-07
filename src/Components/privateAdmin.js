import { useAuth } from "../contexts/authContext";
import { ROLE, readData } from "../utils";
import { Navigate } from "react-router-dom";
import { LoadingComponent } from "./loadingComponent";

export const PrivateAdmin = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (!isLoading) {
    return <LoadingComponent />;
  }

  readData("users").then((data) => {
    const result = data.find((d) => d.email === user.email);

    if (result.role !== ROLE.admin) {
      return <Navigate to="/" />;
    }
  });

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
