import { Avatar, Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { BsSend } from "react-icons/bs";
import React from "react";

const Message = () => {
  return (
    <Box display="flex" justifyContent="flex-end" m="30px 0">
      <HStack justifyContent="flex-end" w="40%">
        <VStack position="relative">
          <Box bg="green.400" color="white" p="2" m="4" borderRadius="10px">
            <Text>Hi! What's up this is the most?</Text>
          </Box>
          <Box position="absolute" top="80%" right="10%">
            <Text>12:42</Text>
          </Box>
        </VStack>
        <Box w="10" borderRadius="full">
          <Avatar
            name="chat user"
            src="https://source.unsplash.com/random?boy"
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default Message;
