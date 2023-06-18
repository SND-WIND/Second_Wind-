const listBookmarks = async (req, res) => {
  const {
    session,
    db: { Bookmark },
  } = req;

  const user_id = session.userId;

  if (!user_id) return res.sendStatus(401);

  const bookmarks = await Bookmark.list({ user_id });

  res.send(bookmarks);
};

module.exports = listBookmarks;
