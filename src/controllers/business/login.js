const loginBusiness = async (req, res) => {
    const {
      session,
      db: { Business },
      body: { username, password },
    } = req;
  
    const business = await Business.findByUsername(username);
    if (!business) return res.sendStatus(404);
  
    const isPasswordValid = await business.isValidPassword(password);
    if (!isPasswordValid) return res.sendStatus(401);
  
    session.businessId = business.id;
    res.send(business);
  };
  
  module.exports = loginBusiness;
  