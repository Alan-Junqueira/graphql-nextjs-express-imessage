import { ISearchedUser } from "@/@types/types";
import { Avatar, Button, Flex, Stack, Text } from "@/chakra/chakra-components";

interface IUserSearchList {
  users: Array<ISearchedUser>;
  addParticipant: (user: ISearchedUser) => void;
}

export const UserSearchList = ({ users, addParticipant }: IUserSearchList) => {
  return (
    <>
      {users.length === 0 ? (
        <Flex mt={6} justify="center">
          <Text>No users found</Text>
        </Flex>
      ) : (
        <Stack mt={6}>
          {users.map((user) => (
            <Stack
              key={user.id}
              direction="row"
              align="center"
              spacing={4}
              py={2}
              px={4}
              rounded={4}
              _hover={{ bg: "whiteAlpha.200" }}
            >
              <Avatar />
              <Flex justify="space-between" width="100%" align="center">
                <Text color="whiteAlpha.700">{user.username}</Text>
                <Button
                  bg="brand.100"
                  _hover={{ bg: "brand.100" }}
                  onClick={() => addParticipant(user)}
                >
                  Select
                </Button>
              </Flex>
            </Stack>
          ))}
        </Stack>
      )}
    </>
  );
};
