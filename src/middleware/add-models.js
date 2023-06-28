const User = require("../db/models/user");
const Business = require("../db/models/business");
const Post = require("../db/models/post");
const Bookmark = require("../db/models/bookmark");
const Comment = require('../db/models/comment');
const Like = require('../db/models/like');
const Job = require('../db/models/job');
const Messages = require('../db/models/messages');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Business,
    Post,
    Bookmark,
    Comment,
    Like,
    Job,
    Messages,
  };
  next();
};

module.exports = addModels;
