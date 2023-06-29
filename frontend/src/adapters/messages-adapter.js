import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/messages";

export const createMessage = async (senderId, recipientId, text ) =>
    fetchHandler(baseUrl, getPostOptions({ senderId, recipientId, text }));

//continue here
//get conversation

export const getConversation = async (recipientId) => fetchHandler(`${baseUrl}/${recipientId}`);
