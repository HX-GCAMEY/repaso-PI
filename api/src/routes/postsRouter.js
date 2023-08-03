const {Router} = require("express");

const {createPostHandler} = require("../handlers/postsHandler");
const postRouter = Router();

postRouter.post("/", createPostHandler);

module.exports = postRouter;
