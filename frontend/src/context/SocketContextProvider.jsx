import React, { useEffect, useState } from "react";
import { SocketContext } from "./SocketContext";
import useAuthContext from "./AuthContext";
import { io } from "socket.io-client";

const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io("https://chatapp-t6jh.onrender.com/", {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socket);
      socket.on("onlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
