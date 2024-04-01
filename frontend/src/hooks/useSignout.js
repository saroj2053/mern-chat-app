import React, { useState } from "react";
import useAuthContext from "../context/AuthContext";
import { useToast } from "@chakra-ui/react";

const useSignout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const toast = useToast();

  const signout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/signout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log(data);

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("userInfo");
      setAuthUser(null);
    } catch (error) {
      toast({
        title: error.message,
        status: "error",
        position: "top-right",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return { loading, signout };
};

export default useSignout;
