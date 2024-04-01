import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import useAuthContext from "../context/AuthContext";

const useSignup = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const hasNoErrors = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
      toast,
    });
    if (!hasNoErrors) return;
    setLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }

      // localstorage
      localStorage.setItem("userInfo", JSON.stringify(data));
      //context
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

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
  toast,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast({
      title: "Please fill in all fields",
      status: "error",
      position: "top-right",
      isClosable: true,
    });
    return false;
  }

  if (password !== confirmPassword) {
    toast({
      title: "Passwords do not match",
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
