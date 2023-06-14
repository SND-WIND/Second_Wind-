const createBusiness = async (req, res) => {
  const {
    session,
    db: { Business },
    body: { username, companyName, email, password },
  } = req;

  console.log(Business);

  // TODO: check if username is taken, what should you return?
  const business = await Business.create({
    username,
    name: companyName,
    email,
    password,
  });

  if (!business) return res.sendStatus(404);

  session.userId = business.id;

  res.send(business);
};

module.exports = createBusiness;
