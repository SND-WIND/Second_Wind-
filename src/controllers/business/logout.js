const logoutBusiness = (req, res) => {
  req.session = null;
  res.sendStatus(204);
};

module.exports = logoutBusiness;
