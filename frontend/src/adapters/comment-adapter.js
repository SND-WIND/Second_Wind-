import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/comments";

export const createComment = async ({ comment, post_id }) =>
  fetchHandler(baseUrl, getPostOptions({ comment, post_id }));

export const getAllComments = async () => {
  const [posts] = await fetchHandler(baseUrl);
  return posts || [];
};

export const getComment = async (id) => fetchHandler(`${baseUrl}/${id}`);
