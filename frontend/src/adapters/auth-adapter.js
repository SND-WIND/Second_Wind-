import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = "/api";

export const checkForLoggedInUser = async () => {
  const [data] = await fetchHandler(`${baseUrl}/me`);
  return data;
};

export const logUserIn = async ({ username, password }) =>
  fetchHandler(
    `${baseUrl}/users/login`,
    getPostOptions({ username, password })
  );

// the logout route pretty much can't fail with our setup, but if yours can, change this
export const logUserOut = async () => {
  await fetchHandler(`${baseUrl}/users/logout`, deleteOptions);
  return true;
};

///Verify with Ethan
export const deleteAccount = async () => {
  await fetchHandler(`${baseUrl}/users/delete`, deleteOptions);
  return true;
};
/*
API call to the /users/delete endpoint using the fetchHandler utility function. Send DELETE request (${baseUrl}/users/delete) with the deleteOptions configuration.
*/
