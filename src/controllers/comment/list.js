const listComments = async (req, res) => {
  const {
    session,
    db: { Comment },
    body: { post_id },
  } = req;

  const { userId, userType } = session;
  if (!userId || !userType) return res.sendStatus(401);

  const comments = await Comment.list({ post_id });
  if (!comments) return res.sendStatus(404);

  res.send(comments);
};

module.exports = listComments;
