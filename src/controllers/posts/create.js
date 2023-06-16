const createPost = async (req, res) => {
  const {
    session,
    db: { Post },
    body: { caption, imageUrl },
  } = req;

  const userId = session.userId;

  console.log('controller',caption, imageUrl, userId);

  const post = await Post.create({ user_id: userId, caption, image_url: imageUrl });
  console.log(post);

  res.send(post);
};

module.exports = createPost;
