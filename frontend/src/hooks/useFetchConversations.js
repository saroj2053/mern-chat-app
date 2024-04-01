import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

const useFetchConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const toast = useToast();
  useEffect(() => {
    const fetchConversations = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/users");
        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(data);
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

    fetchConversations();
  }, []);

  return { loading, conversations };
};

export default useFetchConversations;
