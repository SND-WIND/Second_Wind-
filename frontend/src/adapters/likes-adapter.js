import { fetchHandler, getPostOptions, getPatchOptions, basicFetchOptions} from "../utils";

const baseUrl = "/api/likes";

export const createLike = async ( post_id, user_id ) => {
    console.log("post_id", post_id ,"user_id", user_id)
    
      const res = await fetchHandler(baseUrl, getPostOptions({ post_id, user_id} ));   
      
      return res;
  };
// eating errors here for simplicity

export const getLikes = async (id) => fetchHandler(`/posts/${id}/likes` ,basicFetchOptions);
