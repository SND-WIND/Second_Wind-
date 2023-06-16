const listPosts = async (req, res) => {
  const {
    session,
    db: { Post },
  } = req;

  const posts = await Post.list();

  res.send(posts);
};

module.exports = listPosts;
