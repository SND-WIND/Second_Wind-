const createPost = async (req, res) => {
  const {
    session,
    db: { Post },
    body: { caption, imageUrl },
  } = req;

  const { userId, userType } = session;
  if (!userId || !userType) return res.sendStatus(401);

  const post = await Post.create({
    user_id: userId,
    caption,
    image_url: imageUrl,
    account_type: userType === "user",
  });
  if (!post) return res.sendStatus(404);

  res.send(post);
};

module.exports = createPost;
