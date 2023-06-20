const findPost = async (req, res) => {
    const {
      session,
      db: { Post },
    } = req;
    
    const post = await Post.find( req.params.id, session.userId);
    console.log(post);
   
    res.send(post);
  };
  
  module.exports = findPost;