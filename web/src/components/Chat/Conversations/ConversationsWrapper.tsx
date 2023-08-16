import { Session } from "next-auth"

interface IConversationsWrapper {
  session: Session
}

export const ConversationsWrapper = ({
  session
}: IConversationsWrapper) => {
  return (
    <div>ConversationsWrapper</div>
  )
}
