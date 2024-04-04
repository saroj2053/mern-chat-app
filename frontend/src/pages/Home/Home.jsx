import { HStack, Container, Divider } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import MessageContainer from "../../components/MessageContainer/MessageContainer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Home | Mern Chat App </title>
      </Helmet>
      <Navbar />
      <Container maxW="container.xl">
        <HStack gap="0">
          <Sidebar />
          <Divider orientation="vertical" />
          <MessageContainer />
        </HStack>
      </Container>
    </div>
  );
};

export default Home;
