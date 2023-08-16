"use client";

import { Session } from "next-auth";
import { Box } from "@/chakra/chakra-components";
import { ConversationList } from "./ConversationList";

interface IConversationsWrapper {
  session: Session;
}

export const ConversationsWrapper = ({ session }: IConversationsWrapper) => {
  return (
    <Box
      width={{
        base: "100%",
        md: "25rem",
      }}
      bg="whiteAlpha.50"
      py={6}
      px={3}
    >
      <ConversationList session={session} />
    </Box>
  );
};
