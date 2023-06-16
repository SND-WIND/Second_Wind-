import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/posts";

export const createPost = async ({ caption, imageUrl }) =>
  fetchHandler(
    baseUrl,
    getPostOptions({ caption, imageUrl })
  );

// eating errors here for simplicity
export const getAllPosts = async () => {
  const [users] = await fetchHandler(baseUrl);
  return users || [];
};

export const getPost = async (id) => fetchHandler(`${baseUrl}/${id}`);
