const createPost = async (req, res) => {
  const {
    session,
    db: { Post },
    body: { caption, imageUrl, accountType },
  } = req;

  console.log(caption, imageUrl, accountType);

  const userId =
    accountType === "Personal" ? session.userId : session.businessId;

  const post = await Post.create({
    user_id: userId,
    caption,
    image_url: imageUrl,
    account_type: accountType,
  });

  res.send(post);
};

module.exports = createPost;
