const listBusinessesPosts = async (req, res) => {
    const {
      session,
      db: { Post },
      params: { id },
    } = req;
  
    const posts = await Post.listUserPost({
      user_id: id,
      account_type: false,
    });
  
    res.send(posts);
  };
  
  module.exports = listBusinessesPosts;