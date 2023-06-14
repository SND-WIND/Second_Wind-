const { isAuthorized } = require("../../utils/auth-utils");

const updateBusiness = async (req, res) => {
  const {
    session,
    db: { Business },
    params: { id },
    body: { username },
  } = req;

  if (!isAuthorized(id, session)) return res.sendStatus(403);

  const business = await Business.find(id);
  if (!business) return res.sendStatus(404);

  const updatedBusiness = await business.update(username);
  if (!updatedBusiness) return res.sendStatus(404);
  res.send(updatedBusiness);
};

module.exports = updateBusiness;