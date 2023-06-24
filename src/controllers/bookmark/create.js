const createBookmark = async (req, res) => {
  const {
    session,
    db: { Bookmark },
    body: { post_id },
  } = req;

  const { userId, userType } = session;
  if (!userId || !userType) return res.sendStatus(401);

  const bookmark = await Bookmark.create({
    user_id: userId,
    account_type: userType === "user",
    post_id,
  });
  if (!bookmark) return res.status(404);

  res.status(201).send(bookmark);
};

module.exports = createBookmark;
