const User = require("../db/models/user");
const Business = require("../db/models/business");
const Post = require('../db/models/post');
const Comment = require('../db/models/comment');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Business,
    Post,
    Comment,
  };
  next();
};

module.exports = addModels;
