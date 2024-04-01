import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [inputMessage, setInputMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!inputMessage) return;
    await sendMessage(inputMessage);
    setInputMessage("");
  };
  return (
    <Box w="90%" margin="0 auto" pt="4">
      <InputGroup size="md">
        <Input
          value={inputMessage}
          onChange={(evt) => setInputMessage(evt.target.value)}
          variant="filled"
          pr="4.5rem"
          placeholder="Type your message here"
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            onClick={handleSubmit}
            isDisabled={loading}
            isLoading={loading}
            loadingText="Sending..."
          >
            <BsSend />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default MessageInput;
