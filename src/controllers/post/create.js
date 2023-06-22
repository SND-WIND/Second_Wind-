const createPost = async (req, res) => {
  let {
    session,
    db: { Post },
    body: { caption, imageUrl, accountType },
  } = req;

  console.log(caption, imageUrl, accountType);
  console.log(session.userId)
  const userId =
    accountType === "Personal" ? session.userId : session.businessId;
    accountType ? accountType : (accountType = "Personal");
  const post = await Post.create(
    session.userId,
    caption,
    imageUrl,
    accountType
  );

  res.send(post);
};

module.exports = createPost;
