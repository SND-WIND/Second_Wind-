import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/users";

export const createUser = async ({
  username,
  fullName,
  email,
  password,
  location,
  sex,
  age,
  status,
  bio,
  profile_image,
  cover_image,
}) =>
  fetchHandler(
    baseUrl,
    getPostOptions({
      username,
      fullName,
      email,
      password,
      location,
      sex,
      age,
      status,
      bio,
      profile_image,
      cover_image,
    })
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

// export const updateUsername = async ({ id, username }) =>
//   fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }));

export const updateUserInfo = async ({
  id,
  // username,
  // fullName,
  // email,
  // password,
  location,
  sex,
  age,
  status,
  bio,
  profile_image,
  cover_image,
}) =>
  fetchHandler(
    `${baseUrl}/${id}`,
    getPatchOptions({
      // id,
      // username,
      // fullName,
      // email,
      // password,
      location,
      sex,
      age,
      status,
      bio,
      profile_image,
      cover_image,
    })
  );
