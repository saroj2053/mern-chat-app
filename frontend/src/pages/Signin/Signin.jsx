import { Link } from "react-router-dom";
import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import logo from "../../assets/web-logo.png";

const Signin = () => {
  return (
    <Box
      h="100vh"
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
            <Box display="flex" justifyContent="center" alignItems="center">
              <Image w="150px" h="150px" src={logo} alt="web logo" />
            </Box>
            <Stack spacing="6">
              <Stack
                spacing={{ base: "2", md: "3" }}
                textAlign="center"
                mb="3rem"
              >
                <Heading size={{ base: "md", md: "lg" }}>
                  Sign in to your account
                </Heading>
              </Stack>
            </Stack>
            <Stack spacing="6">
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

              <Stack spacing="6">
                <Button>Sign in</Button>
              </Stack>
              <Text color="fg.muted">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Signin;
