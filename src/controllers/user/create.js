const createUser = async (req, res) => {
  const {
    session,
    db: { User },
    body: { username, fullName, email, password },
  } = req;
  
  // TODO: check if username is taken, what should you return?
  const user = await User.create({
    username,
    full_name: fullName,
    email,
    password,
  });

  if (!user) return res.sendStatus(404);

  session.userId = user.id;

  res.send(user);
};

module.exports = createUser;
