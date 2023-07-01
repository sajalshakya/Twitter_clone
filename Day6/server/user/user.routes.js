import Express from "express";
import UserController from "./user.controller.js";

const route = Express.Router();

route.post("/signup", UserController.userSignUp);
route.post("/login", UserController.userLogin);
route.put("/user-update/:userId", UserController.updateUser);


export default route;