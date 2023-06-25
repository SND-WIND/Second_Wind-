const listPosts = async (req, res) => {
  const {
    session,
    db: { Post },
  } = req;

  const { userId, userType } = session;

  if (!userId && !userType) return res.sendStatus(401);
  const posts = await Post.list({
    user_id: userId,
    account_type: userType === "user",
  });

  res.send(posts);
};

module.exports = listPosts;
