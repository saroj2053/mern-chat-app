import React from "react";
import useFetchConversations from "../../hooks/useFetchConversations";
import Conversation from "./Conversation";
import { Box } from "@chakra-ui/react";

const Conversations = () => {
  const { loading, conversations } = useFetchConversations();

  return (
    <Box py="2" height="calc(100% - 40px)" overflowY="auto">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIndex={index === conversations.length - 1}
        />
      ))}
    </Box>
  );
};

export default Conversations;
