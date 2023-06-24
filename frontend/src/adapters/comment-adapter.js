import { fetchHandler, getPostOptions, getPatchOptions, basicFetchOptions} from "../utils";
//import utils from '../../utils';

const baseUrl = "/api/comments";

export const createComment = async ( user_id, post_id, comment ) => {
    console.log("post_id", post_id ,"user_id", user_id, "comment", comment)
    
      const res = await fetchHandler(baseUrl, getPostOptions({ user_id, post_id, comment} ));   
      
      return res;
  };
  console.log(createComment(14,1, 'really cool post'))
// eating errors here for simplicity

export const getComment = async (id) => fetchHandler(`/comments/${id}/likes` ,basicFetchOptions);
