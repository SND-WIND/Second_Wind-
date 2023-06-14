const User = require("../db/models/user");
const Business = require("../db/models/business");

const addModels = (req, res, next) => {
  req.db = {
    User,
    Business,
  };
  next();
};

module.exports = addModels;
