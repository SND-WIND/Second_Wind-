const createPost = async (req, res) => {
  const {
    session,
    db: { Post },
    body: { caption, imageUrl, accountType },
  } = req;

  const { userId, userType } = session;

  const post = await Post.create({
    user_id: userId,
    caption,
    image_url: imageUrl,
    account_type: userType === "user",
  });

  res.send(post);
};

module.exports = createPost;
