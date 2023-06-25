import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/comments";

export const createComment = async ({ comment, post_id }) =>
  fetchHandler(baseUrl, getPostOptions({ comment, post_id }));

export const getAllComments = async ({ post_id }) => {
  const [comments] = await fetchHandler(
    `${baseUrl}/list`,
    getPostOptions({ post_id })
  );
  return comments || [];
};

export const getComment = async (id) => fetchHandler(`${baseUrl}/${id}`);
