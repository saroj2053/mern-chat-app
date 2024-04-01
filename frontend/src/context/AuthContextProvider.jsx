import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const initialAuthUser = JSON.parse(localStorage.getItem("userInfo")) || null;

  const [authUser, setAuthUser] = useState(initialAuthUser);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
