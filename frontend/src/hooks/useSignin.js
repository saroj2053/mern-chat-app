import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import useAuthContext from "../context/AuthContext";

const useSignin = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { setAuthUser } = useAuthContext();

  const signin = async (username, password) => {
    const hasNoErrors = handleInputErrors({
      username,
      password,
      toast,
    });
    if (!hasNoErrors) return;
    setLoading(true);

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data);

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("userInfo", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast({
        status: "error",
        title: error.message,
        position: "top-right",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return { loading, signin };
};

export default useSignin;

function handleInputErrors({ username, password, toast }) {
  if (!username || !password) {
    toast({
      title: "Please fill in all fields",
      status: "error",
      position: "top-right",
      isClosable: true,
    });
    return false;
  }

  if (password.length < 6) {
    toast({
      title: "Password must be atleast 6 characters long",
      status: "error",
      position: "top-right",
      isClosable: true,
    });

    return false;
  }

  return true;
}
