import { authOptions } from "@/libs/next-auth";
import { getServerSession } from "next-auth";

import { Box } from "@/chakra/chakra-components";
import { Chat } from "@/components/Chat";
import { Auth } from "@/components/Auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <Box>
      {session?.user?.username ? (
        <Chat />
      ) : (
        <Auth session={session} />
      )}
    </Box>
  );
}
