//const {Router, request, response} = require('express') // importamos apenas o router de dentro do modulo express
import { Router } from "express";
import { password } from "./config/database";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";


const routes = new Router();

routes.post("/users",  UserController.store);
routes.get("/session", SessionController.store);

//module.exports = routes
export default routes;
