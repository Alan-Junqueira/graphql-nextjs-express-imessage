"use client";

import { useMutation } from "@apollo/client";
import { userOperations } from "@/graphql/operations/user";
import { FormEvent, useState } from "react";
import { ICreateUsernameData, ICreateUsernameVariables } from "@/@types/types";

import { Text, Input, Button, FormControl } from "@/chakra/chakra-components";
import { Session } from "next-auth";
import { reloadSession } from "@/app/actions/reload-session";
import { useRouter } from "next/navigation";

interface IWithAuth {
  session: Session;
}

export const WithAuth = ({ session }: IWithAuth) => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const [createUsername, { loading, error }] = useMutation<
    ICreateUsernameData,
    ICreateUsernameVariables
  >(userOperations.Mutations.createUsername, {
    fetchPolicy: "no-cache",
  });

  const handleUpdateUser = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!username) return;
      console.log("SESSION", session);
      const { data } = await createUsername({
        variables: {
          username,
          email: session.user.email ?? "",
          image: session.user.image ?? "",
          name: session.user.name ?? "",
          userId: session.user.id ?? "",
        },
      });

      if (!data?.createUsername) {
        throw new Error();
      }

      if (data.createUsername.error) {
        const {
          createUsername: { error },
        } = data;

        throw new Error(error);
      }

      router.refresh();
    } catch (error) {
      console.log("handleUpdateUser error", error);
    }
  };

  return (
    <>
      <Text fontSize="3xl">Create a Username</Text>
      <FormControl
        as="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={8}
        onSubmit={(e) => handleUpdateUser(e)}
      >
        <Input
          placeholder="Enter a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit" width="100%">
          Save
        </Button>
      </FormControl>
    </>
  );
};
