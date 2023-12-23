//AuthContext
import React, { useState, createContext } from "react";

const AuthContext = createContext();


function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  const login = (email, password) => {
    setIsAuth(true);
    setUser({ email, password });
  };

  const logout = () => {
    setIsAuth(false);
    setUser({});
  };

  const values = { isAuth, user, login, logout };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };

