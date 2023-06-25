const listPosts = async (req, res) => {
  const {
    session,
    db: { Post },
  } = req;

  const { userId, accountType } = session;

  if (!userId && !accountType) return res.sendStatus(401);

  const posts = await Post.list({
    user_id: userId,
    account_type: accountType === "user",
  });

  res.send(posts);
};

module.exports = listPosts;
