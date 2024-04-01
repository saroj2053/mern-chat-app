import { Avatar, Box, Container, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/web-logo-white.png";
import React from "react";
import useAuthContext from "../../context/AuthContext";
import SignoutButton from "../SignoutButton/SignoutButton";

const Navbar = () => {
  const { authUser } = useAuthContext();
  return (
    <Box bg="var(--mainColor)" w="100%" color="#fff" p="5px 0">
      <Container maxW="container.xl">
        <HStack justifyContent="space-between">
          <Image src={logo} alt="web logo" w="60px" h="60px" />

          <Box>
            <HStack spacing="8">
              {/* <Text fontSize="xl">{authUser.fullName}</Text> */}
              <Avatar
                name="user profilePic"
                cursor="pointer"
                src={authUser.profilePic}
              />
              <SignoutButton />
            </HStack>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
