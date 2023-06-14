const showMe = async (req, res) => {
  const {
    session,
    db: { Business },
  } = req;
  if (!session.userId) return res.sendStatus(401);

  const business = await Business.find(session.userId);
  res.send(business);
};

module.exports = showMe;
