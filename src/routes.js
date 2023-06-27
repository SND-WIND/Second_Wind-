const express = require("express");
const userController = require("./controllers/user");
const businessController = require("./controllers/business");
const postController = require("./controllers/post");
const bookmarkController = require("./controllers/bookmark");
const commentController = require("./controllers/comment");
const likeController = require("./controllers/like");
const jobController = require("./controllers/job");
const connectionController = require("./controllers/connection");
const addModels = require("./middleware/add-models");
const checkAuthentication = require("./middleware/check-authentication");

const Router = express.Router();
Router.use(addModels);

Router.get("/users", userController.list);
Router.get("/posts", postController.list);
Router.get("/bookmarks", bookmarkController.list);
Router.post("/comments/list", commentController.list);
Router.get("/jobs", jobController.list);
// Router.get("/connections", connectionController.list);
Router.get("/connections/request", connectionController.listRequest);
Router.post("/jobs/search", jobController.search);

Router.get("/posts/:id/likes", likeController.list);

Router.get("/users/:id/posts", postController.listUserPosts);
//get only jobs from certain business
Router.get("/business/:id/jobs", jobController.listBusinessPosts);

Router.post("/users", userController.create);
Router.post("/posts", postController.create);
Router.post("/comments", commentController.create);
Router.post("/likes", likeController.create);
Router.post("/jobs", jobController.create);
Router.post("/bookmarks", bookmarkController.create);
Router.post("/connections", connectionController.create);

Router.get("/users/:id", userController.show);
Router.get("/posts/:id", postController.find);
Router.get("/comments/:id", commentController.find);
Router.get("/jobs/:id", jobController.find);
// We can use middleware slotted in between the route and the controller as well
Router.patch("/users/:id", checkAuthentication, userController.update);
Router.patch("/posts/:id", postController.update);
Router.patch("/comments/:id", commentController.update);
Router.patch("/jobs/:id", jobController.update);

Router.post("/users/login", userController.login);
Router.delete("/users/logout", userController.logout);
Router.delete("/users/delete", userController.deleteUser);

Router.delete("/posts/:id", postController.deletePost);
Router.delete("/comments/:id", commentController.deleteComment);
Router.delete("/bookmarks/:id", bookmarkController.deleteBookmark);
Router.delete("/likes/:id", likeController.deleteLike);
Router.delete("/jobs/:id", jobController.deleteJob);

Router.get("/me", async (req, res) => {
  const {
    session,
    db: { User, Business },
  } = req;
  const { userId, userType } = session;
  if (!userType) return res.sendStatus(401);
  else if (userType === "user") {
    const user = await User.find(userId);
    res.send(user);
  } else if (userType === "business") {
    const business = await Business.find(userId);
    res.send(business);
  }
});

Router.get("/logged-in-secret", checkAuthentication, (req, res) => {
  res.send({ msg: "The secret is: there is no secret." });
});

Router.get("/businesses/:id", businessController.show);
Router.post("/businesses", businessController.create);
Router.patch("/businesses/:id", checkAuthentication, businessController.update);
Router.post("/businesses/login", businessController.login);
Router.delete("/businesses/logout", businessController.logout);

module.exports = Router;
