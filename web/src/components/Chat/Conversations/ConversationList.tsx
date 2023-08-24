"use client";

import { Session } from "next-auth";
import { Box, Text } from "@/chakra/chakra-components";
import { useState } from "react";
import { ConversationModal } from "./Modal/ConversationModal";
import { TConversationPopulated } from "../../../../../api/src/@types/Conversations";
import { ConversationItem } from "./ConversationItem";

interface IConversationList {
  session: Session;
  conversations: Array<TConversationPopulated>;
}

export const ConversationList = ({
  session,
  conversations,
}: IConversationList) => {
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

      <ConversationModal isOpen={isOpen} onClose={onClose} session={session} />

      {conversations.map((conversation) => (
        <ConversationItem conversation={conversation} key={conversation.id} />
      ))}
    </Box>
  );
};
