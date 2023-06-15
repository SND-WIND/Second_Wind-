import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = '/api';

export const checkForLoggedInUser = async () => {
  const [data] = await fetchHandler(`${baseUrl}/me`);
  return data;
};

export const logUserIn = async ({ username, password }) => (
  fetchHandler(`${baseUrl}/users/login`, getPostOptions({ username, password }))
);

// the logout route pretty much can't fail with our setup, but if yours can, change this
export const logUserOut = async () => {
  await fetchHandler(`${baseUrl}/users/logout`, deleteOptions);
  return true;
};
