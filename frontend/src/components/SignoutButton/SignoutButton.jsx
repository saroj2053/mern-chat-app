import React from "react";
import { Button } from "@chakra-ui/react";
import useSignout from "../../hooks/useSignout";

const SignoutButton = () => {
  const { loading, signout } = useSignout();
  return (
    <Button
      w="full"
      bg="red.400"
      color="#fff"
      display="block"
      _hover={{ bg: "red.500" }}
      onClick={signout}
      isDisabled={loading}
      isLoading={loading}
      loadingText="Signing out..."
    >
      Sign Out
    </Button>
  );
};

export default SignoutButton;
