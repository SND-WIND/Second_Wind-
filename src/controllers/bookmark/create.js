const createBookmarks = async (req, res) => {
  const {
    session,
    db: { Bookmark },
    body: { post_id },
  } = req;

  const userId = session.userId;

  const bookmark = await Bookmark.create({
    user_id: userId,
    post_id,
  });

  res.send(bookmark);
};

module.exports = createBookmarks;
