const deleteBookmark = async (req, res) => {
  const {
    session,
    db: { Bookmark },
    params: { id },
  } = req;

  const { userId, userType } = session;

  if (!userId && !userType) return res.sendStatus(401);

  const bookmark = await Bookmark.delete(Number(id));

  if (!bookmark) return res.sendStatus(404);

  res.sendStatus(204);
};

module.exports = deleteBookmark;
