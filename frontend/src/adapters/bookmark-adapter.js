import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = "/api/bookmarks";

export const getAllBookmarks = async () => {
  const [bookmarks] = await fetchHandler(baseUrl);
  return bookmarks || [];
};

export const createBookmark = async ({ post_id }) => {
  const [bookmark] = await fetchHandler(baseUrl, getPostOptions({ post_id }));
  return bookmark;
};

export const deleteBookmark = async ({ post_id }) => {
  const [bookmark] = await fetchHandler(baseUrl, deleteOptions({ post_id }));
  return bookmark;
};
