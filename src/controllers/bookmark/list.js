const listBookmarks = async (req, res) => {
  const {
    session,
    db: { Bookmark },
  } = req;

  const { userId, userType } = session;

  if (!userId && !userType) return res.sendStatus(401);

  const bookmarks = await Bookmark.list({
    user_id: userId,
    account_type: userType === "user",
  });

  res.send(bookmarks);
};

module.exports = listBookmarks;
