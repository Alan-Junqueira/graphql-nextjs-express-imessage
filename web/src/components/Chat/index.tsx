import { LogoutButton } from "../LogoutButton";
import { Flex } from "@/chakra/chakra-components";
import { ConversationsWrapper } from "./Conversations/ConversationsWrapper";
import { FeedWrapper } from "./Feed/FeedWrapper";
import { Session } from "next-auth";

interface IChat {
  session: Session;
}

export const Chat = ({ session }: IChat) => {
  return (
    <Flex height="100vh">
      <ConversationsWrapper session={session} />
      <FeedWrapper session={session} />
    </Flex>
  );
};
