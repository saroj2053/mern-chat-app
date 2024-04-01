import React, { useState } from "react";
import useConversation from "../../store/useConversation";
import { useToast } from "@chakra-ui/react";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const toast = useToast();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages([...messages, data]);
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
  return { sendMessage, loading };
};

export default useSendMessage;
