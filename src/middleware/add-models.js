const User = require("../db/models/user");
const Business = require("../db/models/business");
const Post = require('../db/models/post');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Business,
    Post,
  };
  next();
};

module.exports = addModels;
