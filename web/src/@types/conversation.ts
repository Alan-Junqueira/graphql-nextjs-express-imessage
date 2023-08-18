export interface ICreateConversationData {
  createConversation: {
    conversationId: string;
  };
}

export interface ICreateConversationInput {
  participantIds: Array<string>;
}
