const createComment = async (req, res) => {
  const {
    session,
    db: { Comment },
    body: { post_id, comment },
  } = req;

  const { userId, userType } = session;
  if (!userId || !userType) return res.sendStatus(401);

  const createdComment = await Comment.create({
    user_id: userId,
    account_type: userType === "user",
    post_id,
    comment,
  });

  if (!createdComment) return res.status(404);

  res.send(createdComment);
};

module.exports = createComment;
