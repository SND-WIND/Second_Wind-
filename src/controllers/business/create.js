const createBusiness = async (req, res) => {
  const {
    session,
    db: { Business },
    body: { username, companyName, email, password },
  } = req;

  // TODO: check if username is taken, what should you return?
  const business = await Business.create({
    username,
    name: companyName,
    email,
    password,
  });

  if (!business) return res.sendStatus(404);

  session.userId = business.id;
  session.userType = "business";
  business.type = "business";

  res.send(business);
};

module.exports = createBusiness;
