import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <Box w="90%" margin="0 auto" pt="4">
      <InputGroup size="md">
        <Input
          variant="filled"
          pr="4.5rem"
          placeholder="Type your message here"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm">
            <BsSend />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default MessageInput;
