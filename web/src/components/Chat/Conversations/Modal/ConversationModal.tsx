"use client";

import { ISearchUsersData, ISearchUsersInput } from "@/@types/types";
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
import { useLazyQuery, useQuery } from "@apollo/client";
import { Session } from "next-auth";
import { FormEvent, useState } from "react";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  session: Session;
}

export const ConversationModal = ({ isOpen, onClose, session }: IModal) => {
  const [username, setUsername] = useState("");

  const [searchUsers, { data, loading, error }] = useLazyQuery<
    ISearchUsersData,
    ISearchUsersInput
  >(userOperations.Queries.searchUsers);

  const handleSearchUser = async (e: FormEvent) => {
    e.preventDefault();

    searchUsers({
      variables: {
        usernameToSearch: username,
        myUsername: session.user.username,
      },
    });
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#2d2d2d" pb={4}>
          <ModalHeader>Modal Title</ModalHeader>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
