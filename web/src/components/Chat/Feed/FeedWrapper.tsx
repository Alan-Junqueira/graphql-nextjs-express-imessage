import { Session } from "next-auth"

interface IFeedWrapper {
  session: Session
}

export const FeedWrapper = ({
  session
}: IFeedWrapper) => {
  return (
    <div>FeedWrapper</div>
  )
}
