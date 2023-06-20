const createComment = async (req, res) => {
  const {
    session,
    db: { Comment },
    body: { post_id, comment },
  } = req;

  const userId = session.userId;

  console.log('controller', userId, post_id, comment );

  const createdComment = await Comment.create({ user_id: userId, post_id, comment });
  console.log(createdComment);

  res.send(createdComment);
};

module.exports = createComment;
