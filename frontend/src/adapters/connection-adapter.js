import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = "/api/connections";

export const createConnection = async ({ user_id, account_type }) => {
  const [like] = await fetchHandler(baseUrl, getPostOptions({ user_id, account_type }));
  return like;
};

export const deleteConnection = async ({ like_id }) => {
  const [like] = await fetchHandler(`${baseUrl}/${like_id}`, deleteOptions);
  return like;
};

export const getConnections = async () =>
  fetchHandler(baseUrl, basicFetchOptions);