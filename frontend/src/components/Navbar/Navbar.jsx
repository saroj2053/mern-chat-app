import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Divider,
} from "@chakra-ui/react";
import logo from "../../assets/web-logo-white.png";
import React from "react";
import useAuthContext from "../../context/AuthContext";
import SignoutButton from "../SignoutButton/SignoutButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const { authUser } = useAuthContext();

  const handleAvatarClick = () => {
    navigate("/profile");
  };
  return (
    <Box bg="var(--mainColor)" w="100%" color="#fff" p="5px 0">
      <Container maxW="container.xl">
        <HStack justifyContent="space-between">
          <Image src={logo} alt="web logo" w="60px" h="60px" />

          <Box>
            <HStack spacing="8">
              <Popover size="sm">
                <PopoverTrigger>
                  <Avatar
                    name="user profilePic"
                    cursor="pointer"
                    src={authUser?.profilePic}
                  />
                </PopoverTrigger>
                <PopoverContent w="200px">
                  <PopoverArrow />
                  <PopoverCloseButton />

                  <PopoverBody bg="blue.200" pt="2rem">
                    <Button
                      variant="ghost"
                      onClick={handleAvatarClick}
                      w="100%"
                    >
                      My Profile
                    </Button>
                    <Divider m="10px 0" />
                    <SignoutButton w="100%" />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </HStack>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
