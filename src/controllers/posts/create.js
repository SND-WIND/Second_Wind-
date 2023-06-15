const createPost = async (req, res) => {
    const {
      session,
      db: { Post },
      body: { caption, image_url},
    } = req;
    console.log(caption, image_url, session.user_id);
  
    
    const post = await Post.create( session.user_id, caption, image_url);
    console.log(post);
   
    res.send(post);
  };
  
  module.exports = createPost;