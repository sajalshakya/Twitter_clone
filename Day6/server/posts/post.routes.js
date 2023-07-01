import Express from "express";
import PostController from "./post.controller.js";
import PostMiddleware from "./posts.middleware.js";

const route = Express.Router();

route.get("/posts", PostController.getAllPosts)
route.get("/posts/:postId",PostController.getPostWithComment)
route.post("/posts", PostMiddleware,PostController.createPost)
route.put("/posts/:postId", PostMiddleware,PostController.updatePost)
route.delete("/posts/:postId", PostController.deletePost)

export default route;