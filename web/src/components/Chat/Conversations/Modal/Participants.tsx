import { ISearchedUser } from "@/@types/users";
import { Flex, Stack, Text } from "@/chakra/chakra-components";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface IParticipants {
  participants: Array<ISearchedUser>;
  removeParticipant: (userId: string) => void;
}

export const Participants = ({
  participants,
  removeParticipant,
}: IParticipants) => {
  return (
    <Flex mt={8} gap="10px" flexWrap="wrap">
      {participants.map((participant) => (
        <Stack
          key={participant.id}
          direction="row"
          align="center"
          bg="whiteAlpha.200"
          rounded={4}
          p={2}
        >
          <Text>{participant.username}</Text>
          <IoIosCloseCircleOutline
            size={20}
            cursor="pointer"
            onClick={() => removeParticipant(participant.id)}
          />
        </Stack>
      ))}
    </Flex>
  );
};
