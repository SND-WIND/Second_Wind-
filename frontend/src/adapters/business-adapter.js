import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/businesses";

export const createBusiness = async ({
  username,
  companyName,
  email,
  password,
}) =>
  fetchHandler(
    baseUrl,
    getPostOptions({ username, companyName, email, password })
  );

// eating errors here for simplicity
export const getAllBusinesses = async () => {
  const [users] = await fetchHandler(baseUrl);
  return users || [];
};

export const getBusiness = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const getBusinessPosts = async (id) => {
  const [posts] = await fetchHandler(`${baseUrl}/${id}/posts`);
  return posts || [];
};

export const updateUsername = async ({ id, username }) =>
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }));
