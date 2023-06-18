import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = "/api/bookmarks";

export const getAllBookmarks = async () => {
  const [bookmarks] = await fetchHandler(baseUrl);
  return bookmarks || [];
};
