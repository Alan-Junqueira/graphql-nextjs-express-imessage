"use client";

import { Session } from "next-auth";
import { Box, Text } from "@/chakra/chakra-components";
import { useState } from "react";
import { ConversationModal } from "./Modal/ConversationModal";

interface IConversationList {
  session: Session;
}

export const ConversationList = ({ session }: IConversationList) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Box width="100%">
      <Box
        py={2}
        px={4}
        mb={4}
        bg="blackAlpha.300"
        rounded={4}
        cursor="pointer"
        onClick={onOpen}
      >
        <Text textAlign="center" color="whiteAlpha.800" fontWeight={500}>
          Find or start a conversation
        </Text>
      </Box>
      <ConversationModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
