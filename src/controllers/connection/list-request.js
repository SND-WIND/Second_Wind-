const listConnectionRequests = async (req, res) => {
  const {
    session,
    db: { Connection },
  } = req;
  const { userId, userType } = session;
  if (!userId || !userType) return res.sendStatus(401);

  const [connections] = await Connection.listRequest({
    userId,
    userType: userType === "user",
  });

  res.send(connections);
};

module.exports = listConnectionRequests;
