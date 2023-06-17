import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/users";

export const createUser = async ({ username, fullName, email, password }) =>
  fetchHandler(
    baseUrl,
    getPostOptions({ username, fullName, email, password })
  );

// eating errors here for simplicity
export const getAllUsers = async () => {
  const [users] = await fetchHandler(baseUrl);
  return users || [];
};

export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const getUserPosts = async (id) => {
  const [posts] = await fetchHandler(`${baseUrl}/${id}/posts`);
  return posts || [];
};

export const updateUsername = async ({ id, username }) =>
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }));
