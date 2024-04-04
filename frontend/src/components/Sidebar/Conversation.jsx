import React from "react";
import { Box, Avatar, HStack, Text, Divider, Badge } from "@chakra-ui/react";
import useConversation from "../../store/useConversation";
import useSocketContext from "../../context/SocketContext";

const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();

  const userIsOnline = onlineUsers.includes(conversation._id);

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
        <Box position="relative">
          <Avatar
            src={conversation.profilePic}
            w="3rem"
            borderRadius="full"
            name="avatar of user in database"
          />
          {userIsOnline && (
            <Badge
              colorScheme="green"
              position="absolute"
              top="0"
              right="0"
              transform="translate(50%, -50%)"
            >
              Online
            </Badge>
          )}
        </Box>
        <Text fontSize="sm" fontWeight="bold" color="black.500">
          {conversation.fullName}
        </Text>
      </HStack>
      {!lastIndex && <Divider orientation="horizontal" pt="1" />}
    </Box>
  );
};

export default Conversation;
