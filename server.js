import express from 'express';
import tweetsRoute from './routes/tweets.routes.js';
import usersRoute from './routes/usersRoute.js';

const server = express();
const port=8080;

server.use(express.json());

server.use("/",tweetsRoute);
server.use("/",usersRoute);


server.listen(port, ()=> { console.log(`Le serveur est sur le port : http://localhost:${port}`) });


