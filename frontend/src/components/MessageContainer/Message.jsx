import { Avatar, Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import useAuthContext from "../../context/AuthContext";
import useConversation from "../../../store/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;

  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const bubbleBgColor = fromMe ? "green.400" : "gray.400";
  const chatAlignmentClass = fromMe ? "flex-end" : "flex-start";

  const getTimeInHoursAndMinutes = (createdDate) => {
    const date = new Date(createdDate);
    const time = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return time;
  };
  return (
    <Box display="flex" justifyContent={chatAlignmentClass} m="30px 0">
      <HStack justifyContent="flex-end" key={message._id}>
        {fromMe ? (
          <>
            <VStack position="relative">
              <Box
                bg={bubbleBgColor}
                color="white"
                p="2"
                m="4"
                borderRadius="10px"
              >
                <Text>{message.message}</Text>
              </Box>
              <Box position="absolute" top="80%" right="10%">
                <Text fontSize="xs">
                  {getTimeInHoursAndMinutes(message.createdAt)}
                </Text>
              </Box>
            </VStack>
            <Box w="10" borderRadius="full">
              <Avatar name="chat user" src={profilePic} />
            </Box>
          </>
        ) : (
          <>
            <Box w="10" borderRadius="full">
              <Avatar name="chat user" src={profilePic} />
            </Box>
            <VStack position="relative">
              <Box
                bg={bubbleBgColor}
                color="white"
                p="2"
                m="4"
                borderRadius="10px"
              >
                <Text>{message.message}</Text>
              </Box>
              <Box position="absolute" top="80%" right="10%">
                <Text fontSize="xs">
                  {getTimeInHoursAndMinutes(message.createdAt)}
                </Text>
              </Box>
            </VStack>
          </>
        )}
      </HStack>
    </Box>
  );
};

export default Message;
