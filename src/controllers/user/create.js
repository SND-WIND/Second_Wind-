const createUser = async (req, res) => {
  const {
    session,
    db: { User },
    body: { username, fullName, email, password, location, sex, age, status, bio, profile_image, cover_image },
  } = req;
  
  // TODO: check if username is taken, what should you return?
  const user = await User.create({
    username,
    full_name: fullName,
    email,
    password,
    location,
    sex,
    age,
    status,
    bio,
    profile_image,
    cover_image,
  });

  if (!user) return res.sendStatus(404);

  session.userId = user.id;
  session.userType = "user";
  user.type = "user";

  res.send(user);
};

module.exports = createUser;
