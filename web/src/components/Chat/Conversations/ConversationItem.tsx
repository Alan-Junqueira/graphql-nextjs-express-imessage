import { TConversationPopulated } from "../../../../../api/src/@types/Conversations";
import { Stack, Text } from "@/chakra/chakra-components";

interface IConversationItem {
  conversation: TConversationPopulated;
}
export const ConversationItem = ({ conversation }: IConversationItem) => {
  return (
    <Stack p={4} _hover={{ bg: "whiteAlpha.200" }} rounded={4} cursor="pointer">
      <Text>{conversation.id}</Text>
    </Stack>
  );
};
