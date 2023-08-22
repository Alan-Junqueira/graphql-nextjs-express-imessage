import { TConversationPopulated } from "../../../api/src/@types/Conversations";

export interface IConversationsData {
  conversations: Array<TConversationPopulated>;
}

export interface ICreateConversationData {
  createConversation: {
    conversationId: string;
  };
}

export interface ICreateConversationInput {
  participantIds: Array<string>;
}
