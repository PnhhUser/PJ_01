import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { readData } from "../utils";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = function ({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(true);
        readData("users").then((data) => {
          const result = data.find((d) => d.userId === user?.uid);
          setRole(result?.role);
          setPerson(result);
        });
      } else {
        setUser(user);
        setIsLoading(true);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, isLoading, person }}>
      {children}
    </AuthContext.Provider>
  );
};
