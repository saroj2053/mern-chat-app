import { Box, Text, Heading } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  const toLastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      toLastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  }, [messages]);
  return (
    <Box p="6" height="calc(100% - 150px)" overflowY="auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <Box
            key={message._id}
            ref={index === messages.length - 1 ? toLastMessageRef : null}
          >
            <Message key={message._id} message={message} />
          </Box>
        ))}
      {!loading && messages.length === 0 && (
        <Box>
          <Heading as="h6" textAlign="center" py="3">
            No Messages Found
          </Heading>
          <Text textAlign="center">Send a message to start conversation</Text>
        </Box>
      )}
    </Box>
  );
};

export default Messages;
