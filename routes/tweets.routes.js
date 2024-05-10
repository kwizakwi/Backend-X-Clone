import { Router } from "express";
import { getTweets } from "../controller/GET/tweets.controller.js";
import postTweets from "../controller/POST/postTweetscontroller.js";


const tweetsRoute=Router();


tweetsRoute.get("/tweets", getTweets)
tweetsRoute.post("/tweets", postTweets)
export default tweetsRoute;