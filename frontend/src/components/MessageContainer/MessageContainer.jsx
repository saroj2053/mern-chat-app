import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import useConversation from "../../../store/useConversation";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //when component unmounts, this cleanup function is called
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <Box
      className="messageContainer"
      bg="blue.100"
      w="100%"
      h={`calc(100vh - 70px)`}
    >
      {!selectedConversation ? (
        <ConversationNotSelected />
      ) : (
        <>
          <HStack>
            <Box bg="blue.200" w="full" p="4" borderTopRightRadius="8">
              <Text fontSize="1.25rem" fontWeight="bold" color="white">
                Message will be sent to:{" "}
                <span style={{ color: "rgba(0,0,0,0.9)" }}>
                  {selectedConversation.fullName}
                </span>
              </Text>
            </Box>
          </HStack>
          {/* messages */}
          <Messages />
          <MessageInput />
        </>
      )}
    </Box>
  );
};

export default MessageContainer;

const ConversationNotSelected = () => {
  return (
    <Box
      bg="blue.100"
      w="100%"
      h={`calc(100vh - 70px)`}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box textAlign="center">
        <Heading py="3">Welcome Saroj Sah</Heading>
        <Text py="3">Select a conversation to start messaging</Text>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100%"
        >
          <BiSolidMessageRoundedDetail fontSize="15rem" position="absolute" />
        </Box>
      </Box>
    </Box>
  );
};
