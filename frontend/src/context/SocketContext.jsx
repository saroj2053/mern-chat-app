import React, { createContext, useContext } from "react";

export const SocketContext = createContext();

const useSocketContext = () => {
  return useContext(SocketContext);
};

export default useSocketContext;
