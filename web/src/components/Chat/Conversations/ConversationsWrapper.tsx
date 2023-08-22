"use client";

import { Session } from "next-auth";
import { Box } from "@/chakra/chakra-components";
import { ConversationList } from "./ConversationList";
import { useQuery } from "@apollo/client";
import { conversationOperations } from "@/graphql/operations/conversation";
import { IConversationsData } from "@/@types/conversation";

interface IConversationsWrapper {
  session: Session;
}

export const ConversationsWrapper = ({ session }: IConversationsWrapper) => {
  const {
    data: conversationsData,
    error: conversationsError,
    loading: conversationsLoading,
  } = useQuery<IConversationsData, { userId: string }>(
    conversationOperations.Queries.conversations,
    {
      variables: { userId: session.user.id },
    }
  );

  console.log("HERE IS THE DATA", conversationsData);

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
