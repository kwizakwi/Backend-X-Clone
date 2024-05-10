import { Router } from "express";

import { getUsers } from "../controller/GET/usersController.js";

const usersRoute=Router();


usersRoute.get("/tweetUsers",getUsers)
export default usersRoute;