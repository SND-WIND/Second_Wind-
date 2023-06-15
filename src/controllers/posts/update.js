const updatePost = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { id },
    body: { caption },
  } = req;

  //if (!isAuthorized(id, session)) return res.sendStatus(403);

  const updatedPost = await Post.update(id, caption);
  res.send(updatedPost);
};

module.exports = updatePost;
