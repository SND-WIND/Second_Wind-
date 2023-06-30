const list = require("./list");
const create = require("./create");
const deletePost = require("./delete");
const update = require("./update");
const find = require("./find");
const listUserPosts = require("./list-user");
const listBusinessPosts = require("./list-business");

module.exports = {
  list,
  create,
  deletePost,
  update,
  find,
  listUserPosts,
  listBusinessPosts,
};
