import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = "/api/bookmarks";

export const getAllBookmarks = async () => {
  const [bookmarks] = await fetchHandler(baseUrl);
  return bookmarks || [];
};

export const createBookmark = async ({ post_id, post_type}) => {
  const [bookmark] = await fetchHandler(baseUrl, getPostOptions({ post_id, post_type }));
  return bookmark;
};

// export const createJobBookmark = async ({ job_id }) => {
//   const [bookmark] = await fetchHandler(baseUrl, getPostOptions({ job_id }));
//   return bookmark;
// };

export const deleteBookmark = async ({ bookmark_id }) => {
  const [bookmark] = await fetchHandler(
    `${baseUrl}/${bookmark_id}`,
    deleteOptions
  );
  return bookmark;
};
