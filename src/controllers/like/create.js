const createLike = async (req, res) => {
  const {
    session,
    db: { Like },
    body: { post_id },
  } = req;

  const { userId, userType } = session;
  if (!userId || !userType) return res.sendStatus(401);

  const like = await Like.create({
    post_id,
    user_id: userId,
    account_type: userType === "user",
  });
  if (!like) return res.status(404);

  res.status(201).send(like);
};

module.exports = createLike;
