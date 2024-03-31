import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

const Signup = () => {
  return (
    <Box
      minH="100vh"
      bg="linear-gradient(to bottom left, var(--secondaryColor) 50%, var(--mainColor) 50%)"
      pos="relative"
    >
      <Container
        maxW="lg"
        px={{ base: "0", sm: "8" }}
        pos="absolute"
        top="50%"
        left="50%"
        transform={`translate(-50%, -50%)`}
      >
        <Stack spacing="8">
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "#fff", sm: "#fff" }}
            boxShadow={{ base: "none", sm: "md" }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="6">
              <Stack
                spacing={{ base: "2", md: "3" }}
                textAlign="center"
                mb="3rem"
              >
                <Heading as="h2" size={{ base: "lg", md: "xl" }}>
                  Sign Up
                </Heading>
              </Stack>
            </Stack>
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="fullName">Full Name</FormLabel>
                  <Input id="fullName" type="text" />
                </FormControl>
              </Stack>
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input id="username" type="text" />
                </FormControl>
              </Stack>
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input id="password" type="password" />
                </FormControl>
              </Stack>
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="confirmPassword">
                    Confirm Password
                  </FormLabel>
                  <Input id="confirmPassword" type="password" />
                </FormControl>
              </Stack>
              <Stack spacing={5} direction="row">
                <FormControl>
                  <FormLabel htmlFor="gender" id="gender">
                    Gender
                  </FormLabel>
                  <HStack spacing="5">
                    <Checkbox name="gender">Male</Checkbox>
                    <Checkbox name="gender">Female</Checkbox>
                  </HStack>
                </FormControl>
              </Stack>
              <Stack spacing="6">
                <Button>Sign Up</Button>
              </Stack>
              <Text color="fg.muted">
                Already have an account? <Link to="/">Sign in</Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Signup;
