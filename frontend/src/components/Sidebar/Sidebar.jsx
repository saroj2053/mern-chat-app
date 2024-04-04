import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <Box
      className="sidebar"
      bg="blue.50"
      h={`calc(100vh - 70px)`}
      w="400px"
      p="0 20px"
    >
      {/* <Text p="1rem" fontSize="1.25rem">
        Conversations
      </Text> */}

      <Conversations />
    </Box>
  );
};

export default Sidebar;
