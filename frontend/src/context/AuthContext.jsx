import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
