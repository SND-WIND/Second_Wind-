const express = require("express");
const userController = require("./controllers/user");
const businessController = require("./controllers/business");
const postController = require("./controllers/posts");
const commentController = require("./controllers/comment");
const addModels = require("./middleware/add-models");
const checkAuthentication = require("./middleware/check-authentication");

const Router = express.Router();
Router.use(addModels);

Router.get("/users", userController.list);
Router.get("/posts", postController.list);
Router.get("/comments", commentController.list);

Router.get("/users/:id/posts", postController.listUserPosts);

Router.post("/users", userController.create);
Router.post("/posts", postController.create);
Router.post("/comments", commentController.create);

Router.get("/users/:id", userController.show);
Router.get("/posts/:id", postController.find);
Router.get("/comments/:id", commentController.find);
// We can use middleware slotted in between the route and the controller as well
Router.patch("/users/:id", checkAuthentication, userController.update);
Router.patch("/posts/:id", postController.update);
Router.patch("/comments/:id", commentController.update);

Router.post("/users/login", userController.login);
Router.delete("/users/logout", userController.logout);
Router.delete("/users/delete", userController.deleteUser);
Router.delete("/posts/:id", postController.deletePost);
Router.delete("/comments/:id", commentController.deleteComment);
Router.get("/me", userController.showMe);

Router.get("/logged-in-secret", checkAuthentication, (req, res) => {
  res.send({ msg: "The secret is: there is no secret." });
});

Router.get("/businesses/:id", businessController.show);
Router.post("/businesses", businessController.create);
Router.patch("/businesses/:id", checkAuthentication, businessController.update);
Router.post("/businesses/login", businessController.login);
Router.delete("/businesses/logout", businessController.logout);

module.exports = Router;
