import React, { useState } from "react";
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
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const { loading, signup } = useSignup();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckboxChange = (gender) => {
    setFormData({ ...formData, gender: gender });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await signup(formData);
  };
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
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(evt) =>
                      setFormData({ ...formData, fullName: evt.target.value })
                    }
                  />
                </FormControl>
              </Stack>
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input
                    id="username"
                    type="text"
                    value={formData.username}
                    onChange={(evt) =>
                      setFormData({ ...formData, username: evt.target.value })
                    }
                  />
                </FormControl>
              </Stack>
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(evt) =>
                      setFormData({ ...formData, password: evt.target.value })
                    }
                  />
                </FormControl>
              </Stack>
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="confirmPassword">
                    Confirm Password
                  </FormLabel>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(evt) =>
                      setFormData({
                        ...formData,
                        confirmPassword: evt.target.value,
                      })
                    }
                  />
                </FormControl>
              </Stack>
              <Stack spacing={5} direction="row">
                <FormControl>
                  <FormLabel htmlFor="gender" id="gender">
                    Gender
                  </FormLabel>
                  <HStack spacing="5">
                    <Checkbox
                      name="gender"
                      isChecked={formData.gender === "male"}
                      onChange={() => handleCheckboxChange("male")}
                    >
                      Male
                    </Checkbox>
                    <Checkbox
                      name="gender"
                      isChecked={formData.gender === "female"}
                      onChange={() => handleCheckboxChange("female")}
                    >
                      Female
                    </Checkbox>
                  </HStack>
                </FormControl>
              </Stack>
              <Stack spacing="6">
                <Button
                  onClick={handleSubmit}
                  isDisabled={loading}
                  isLoading={loading}
                  loadingText="Signing up..."
                >
                  Sign Up
                </Button>
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
