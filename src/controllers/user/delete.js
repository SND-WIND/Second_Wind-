const deleteUser = async (req, res) => {
  const {
    session,
    db: { User },
  } = req;
  const userId = session.userId;
  const user = await User.delete(userId);
  req.session = null;
  if (!user) return res.status(404).json({ message: "User not found" });
  return res.json({ message: "User deleted successfully" });
};

module.exports = deleteUser;
