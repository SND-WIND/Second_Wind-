const express = require("express");
const userController = require("./controllers/user");
const businessController = require("./controllers/business");
const addModels = require("./middleware/add-models");
const checkAuthentication = require("./middleware/check-authentication");

const Router = express.Router();
Router.use(addModels);

Router.get("/users", userController.list);
Router.post("/users", userController.create);
Router.get("/users/:id", userController.show);

// We can use middleware slotted in between the route and the controller as well
Router.patch("/users/:id", checkAuthentication, userController.update);

Router.post("/users/login", userController.login);
Router.delete("/users/logout", userController.logout);
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
