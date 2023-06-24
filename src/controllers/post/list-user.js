const listUsersPosts = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { id },
  } = req;

  const posts = await Post.listUserPost({
    user_id: id,
    account_type: session.userType === "user",
  });

  res.send(posts);
};

module.exports = listUsersPosts;
