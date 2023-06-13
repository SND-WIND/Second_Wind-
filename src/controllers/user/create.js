const createUser = async (req, res) => {
  const {
    session,
    db: { User },
    body: { username, full_name, email, password },
  } = req;

  // TODO: check if username is taken, what should you return?
  const user = await User.create({ username, full_name, email, password });
  session.userId = user.id;

  res.send(user);
};

module.exports = createUser;
