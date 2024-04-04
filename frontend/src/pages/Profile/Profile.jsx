import {
  Box,
  Divider,
  VStack,
  Text,
  Avatar,
  HStack,
  Heading,
  Button,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../context/AuthContext";
import { Helmet } from "react-helmet-async";
import { FaCircleArrowLeft } from "react-icons/fa6";

const Profile = () => {
  const { authUser } = useAuthContext();
  const navigate = useNavigate();

  const handleGoBacK = () => {
    navigate(-1);
  };
  return (
    <>
      <Helmet>
        <title>Profile | Mern Chat App</title>
      </Helmet>
      <Box
        h="100vh"
        bg="blue.200"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <VStack
          bg="white"
          w={{ base: "90%", sm: "75%", md: "65%" }}
          borderRadius="20px"
          padding="20px"
        >
          <Icon
            as={FaCircleArrowLeft}
            fontSize="3rem"
            p="0.25rem 0.5rem"
            cursor="pointer"
            _hover={{ bg: "gray.200", borderRadius: "10px" }}
            onClick={handleGoBacK}
          />

          <Heading as="h4">My Profile</Heading>
          <Divider orientation="horizontal"></Divider>
          <HStack>
            <VStack m="10px 0">
              <Avatar
                name="user avatar"
                src={authUser.profilePic}
                fontSize="3rem"
              />
              <Text fontSize="1.125rem" fontWeight="bold">
                {authUser.fullName}
              </Text>
            </VStack>
            <Divider orientation="vertical" p="0 1rem" color="blue.300" />
            <Text
              bg="blue.200"
              fontSize="1.25rem"
              color="white"
              p="0.75rem 1.75rem"
              borderRadius="10px"
            >
              {" "}
              Username: {authUser.username}
            </Text>
          </HStack>
          <Button variant="info" isDisabled>
            Edit Profile Pic
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default Profile;
