const createBookmarks = async (req, res) => {
  const {
    session,
    db: { Bookmark },
    body: { post_id },
  } = req;

  const { userId, userType } = session;

  const bookmark = await Bookmark.create({
    user_id: userId,
    account_type: userType === "user",
    post_id,
  });

  res.send(bookmark);
};

module.exports = createBookmarks;
