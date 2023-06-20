const User = require("../db/models/user");
const Business = require("../db/models/business");
const Post = require('../db/models/post');
const Comment = require('../db/models/comment');
const Like = require('../db/models/like');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Business,
    Post,
    Comment,
    Like,
  };
  next();
};

module.exports = addModels;
