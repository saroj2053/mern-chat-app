import React, { useEffect, useState } from "react";
import useConversation from "../store/useConversation";
import { useToast } from "@chakra-ui/react";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const toast = useToast();
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/messages/${selectedConversation._id}`
        );

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast({
          title: error.message,
          status: "error",
          position: "top-right",
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessage;
