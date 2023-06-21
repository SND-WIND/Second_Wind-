const createPost = async (req, res) => {
  const {
    session,
    db: { Post },
    body: { caption, imageUrl, accountType },
  } = req;

  const userId = session.userId;

  const post = await Post.create({
    user_id: userId,
    caption,
    image_url: imageUrl,
    account_type: accountType === "user",
  });

  res.send(post);
};

module.exports = createPost;
