const createBookmark = async (req, res) => {
  const {
    session,
    db: { Bookmark },
    body: { post_id, post_type  },
  } = req;

  const { userId, userType } = session;
  if (!userId || !userType) return res.sendStatus(401);

  const bookmark = await Bookmark.create({
    user_id: userId,
    account_type: userType === "user",
    post_id,
    post_type: post_type
  });
  if (!bookmark) return res.status(404);

  res.status(201).send(bookmark);
};

module.exports = createBookmark;
