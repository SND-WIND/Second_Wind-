import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = "/api/likes";

export const createLike = async ({ post_id }) => {
  const [like] = await fetchHandler(baseUrl, getPostOptions({ post_id }));
  return like;
};

export const deleteLike = async ({ like_id }) => {
  const [like] = await fetchHandler(`${baseUrl}/${like_id}`, deleteOptions);
  return like;
};

export const getLikes = async (id) =>
  fetchHandler(`/posts/${id}/likes`, basicFetchOptions);
