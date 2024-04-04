import React from "react";
import useFetchConversations from "../../hooks/useFetchConversations";
import Conversation from "./Conversation";
import { Box, Text } from "@chakra-ui/react";

const Conversations = () => {
  const { loading, conversations } = useFetchConversations();

  return (
    <>
      <Text fontSize="1.25rem" fontWeight="bold" p="10px 0">
        Conversations
      </Text>
      <Box py="2" height="calc(100% - 50px)" overflowY="auto">
        {conversations.map((conversation, index) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIndex={index === conversations.length - 1}
          />
        ))}
      </Box>
    </>
  );
};

export default Conversations;
