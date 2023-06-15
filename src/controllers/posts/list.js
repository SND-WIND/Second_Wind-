const listPosts = async (req, res) => {
    const {
        session,
        db: { 
            Post },
      } = req;
      console.log( session.userId);
    
      
      const post = await Post.list(session.userId);
      console.log(post);
     
      res.send(post);
    
}

module.exports = listPosts;