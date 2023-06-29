const listConnections = async (req, res) => {
  const {
    session,
    db: { Connection },
  } = req;
  const { userId, userType } = session;
  if (!userId || !userType) return res.sendStatus(401);

  const [connections] = await Connection.list({ userId, userType });

  res.send(connections);
};

module.exports = listConnections;
