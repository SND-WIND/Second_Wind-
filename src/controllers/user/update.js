const { isAuthorized } = require("../../utils/auth-utils");

const updateUser = async (req, res) => {
  const {
    session,
    db: { User },
    params: { id },
    body: {
      username,
      fullName,
      email,
      password,
      location,
      sex,
      age,
      status,
      bio,
      profile_image,
      cover_image,
    },
  } = req;

  if (!isAuthorized(id, session)) return res.sendStatus(403);

  const user = await User.find(id);
  if (!user) return res.sendStatus(404);

  const updatedUser = await user.update(
    username,
    fullName,
    email,
    password,
    location,
    sex,
    age,
    status,
    bio,
    profile_image,
    cover_image
  );
  if (!updatedUser) return res.sendStatus(404);
  res.send(updatedUser);
};

module.exports = updateUser;
