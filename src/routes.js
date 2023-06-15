const express = require("express");
const userController = require("./controllers/user");
const postController = require("./controllers/posts");
const addModels = require("./middleware/add-models");
const checkAuthentication = require("./middleware/check-authentication");

const Router = express.Router();
Router.use(addModels);


Router.get("/users", userController.list);
Router.get("/posts", postController.list);

Router.post("/users", userController.create);
Router.post("/posts", postController.create);

Router.get("/users/:id", userController.show);
Router.get("/posts/:id", postController.find);
// We can use middleware slotted in between the route and the controller as well
Router.patch("/users/:id", checkAuthentication, userController.update);
Router.patch("/posts/:id", postController.update);

Router.post("/login", userController.login);
Router.delete("/logout", userController.logout);
Router.delete("/posts/:id", postController.deletePost);
Router.get("/me", userController.showMe);

Router.get("/logged-in-secret", checkAuthentication, (req, res) => {
  res.send({ msg: "The secret is: there is no secret." });
});

module.exports = Router;
