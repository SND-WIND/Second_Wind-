const createConnection = async (req, res) => {
  const {
    session,
    db: { Connection },
    body: { user_id, account_type },
  } = req;

  const { userId, userType } = session;
  if (!userId || !userType) return res.sendStatus(401);

  const createdConnection = await Connection.create({
    user_id1: userId,
    account_type1: userType === "user",
    user_id2: user_id,
    account_type2: account_type === "user",
  });

  if (!createdConnection) return res.status(404);

  res.send(createdConnection);
};

module.exports = createConnection;
