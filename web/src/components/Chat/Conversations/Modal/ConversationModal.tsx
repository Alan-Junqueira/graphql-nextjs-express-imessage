"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@/chakra/chakra-components";
import { userOperations } from "@/graphql/operations/user";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Session } from "next-auth";
import { FormEvent, useState } from "react";
import { UserSearchList } from "./UserSearchList";
import { Participants } from "./Participants";
import { toast } from "react-hot-toast";
import { conversationOperations } from "@/graphql/operations/conversation";
import {
  ISearchedUser,
  ISearchUsersData,
  ISearchUsersInput,
} from "@/@types/users";
import {
  ICreateConversationData,
  ICreateConversationInput,
} from "@/@types/conversation";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  session: Session;
}

export const ConversationModal = ({ isOpen, onClose, session }: IModal) => {
  const [username, setUsername] = useState("");
  const [participants, setParticipants] = useState<Array<ISearchedUser>>([]);

  const [searchUsers, { data, loading, error }] = useLazyQuery<
    ISearchUsersData,
    ISearchUsersInput
  >(userOperations.Queries.searchUsers);

  const [createConversation, { loading: createConversationLoading }] =
    useMutation<ICreateConversationData, ICreateConversationInput>(
      conversationOperations.Mutations.createConversation
    );

  const handleSearchUser = async (e: FormEvent) => {
    e.preventDefault();

    searchUsers({
      variables: {
        usernameToSearch: username,
        myUsername: session.user.username,
      },
    });
  };

  const onCreateConversation = async () => {
    const participantIds = [
      session.user.id,
      ...participants.map((participant) => participant.id),
    ];

    try {
      const { data } = await createConversation({
        variables: {
          participantIds,
        },
      });

      console.log("createConversation data", data)
    } catch (error: any) {
      console.log("onCreateConversation", error);
      toast.error(error?.message);
    }
  };

  const addParticipant = (user: ISearchedUser) => {
    setParticipants((prev) => [...prev, user]);
    setUsername("");
  };

  const removeParticipant = (userId: string) => {
    setParticipants((prev) => prev.filter((p) => p.id !== userId));
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#2d2d2d" pb={4}>
          <ModalHeader>Create a Conversation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSearchUser}>
              <Stack spacing={4}>
                <Input
                  placeholder="Enter a username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Button
                  type="submit"
                  isDisabled={!username}
                  isLoading={loading}
                >
                  Search
                </Button>
              </Stack>
            </form>
            {data?.searchUsers && (
              <UserSearchList
                users={data.searchUsers}
                addParticipant={addParticipant}
              />
            )}

            {participants.length > 0 && (
              <>
                <Participants
                  participants={participants}
                  removeParticipant={removeParticipant}
                />

                <Button
                  bg="brand.100"
                  width="100%"
                  mt={6}
                  _hover={{ bg: "brand.100" }}
                  isLoading={createConversationLoading}
                  onClick={onCreateConversation}
                >
                  Create Conversation
                </Button>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
