"use client";

import { Session } from "next-auth";
import { useSearchParams } from "next/navigation";
import { Flex } from "@/chakra/chakra-components";

interface IFeedWrapper {
  session: Session;
}

export const FeedWrapper = ({ session }: IFeedWrapper) => {
  const conversationId = useSearchParams().get("conversationId");
  return (
    <Flex
      width="100%"
      direction="column"
      display={{ base: conversationId ? "flex" : "none", md: "flex" }}
    >
      {conversationId ? <Flex></Flex> : <div>No Conversation Selected</div>}
    </Flex>
  );
};
