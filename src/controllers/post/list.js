const listPosts = async (req, res) => {
  const {
    session,
    db: { Post },
  } = req;

  const user_id = session.userId;

  if (!user_id) return res.sendStatus(401);

  const posts = await Post.list();

  res.send(posts);
};

module.exports = listPosts;
