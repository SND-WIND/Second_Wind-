const showBusiness = async (req, res) => {
  const {
    db: { Business },
    params: { id },
  } = req;

  const business = await Business.find(id);
  if (!business) return res.sendStatus(404);

  res.send(business);
};

module.exports = showBusiness;
