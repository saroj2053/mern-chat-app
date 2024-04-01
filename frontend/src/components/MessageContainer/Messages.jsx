import { Box } from "@chakra-ui/react";
import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <Box p="6" height="calc(100% - 150px)" overflowY="auto">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </Box>
  );
};

export default Messages;
