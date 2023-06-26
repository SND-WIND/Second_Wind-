const { Connection } = require("pg");


const createConnection = async (req, res) => {
    const {
      session,
      db: { connections },
      body: { post_id },
    } = req;
  
    const { userId, userType } = session;
    if (!userId || !userType) return res.sendStatus(401);
  
    const connection = await Connection.create({
      user_id: userId,
      account_type: userType === "user",
      post_id,
    });
    if (!connections) return res.status(404);
  
    res.status(201).send(connections);
  };
  
  module.exports = createConnection;
  
