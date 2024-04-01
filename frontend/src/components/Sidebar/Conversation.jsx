import React from "react";
import { Box, Avatar, HStack, Text, Divider } from "@chakra-ui/react";
import useConversation from "../../../store/useConversation";

const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <Box p={{ base: "1", sm: "2" }}>
      <HStack
        spacing="10"
        p="2"
        _hover={{
          bg: "var(--mainColor)",
          cursor: "pointer",
          borderRadius: "4",
          color: "white",
        }}
        bg={isSelected ? "var(--mainColor)" : ""}
        borderRadius="4"
        color={isSelected ? "white" : ""}
        onClick={() => setSelectedConversation(conversation)}
      >
        <Avatar
          src={conversation.profilePic}
          w="3rem"
          borderRadius="full"
          name="avatar of user in database"
        />
        <Text fontSize="sm" fontWeight="bold" color="black.500">
          {conversation.fullName}
        </Text>
      </HStack>
      {!lastIndex && <Divider orientation="horizontal" pt="1" />}
    </Box>
  );
};

export default Conversation;
