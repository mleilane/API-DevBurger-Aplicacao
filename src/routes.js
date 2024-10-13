//const {Router, request, response} = require('express') // importamos apenas o router de dentro do modulo express
import { Router } from "express";
import { password } from "./config/database";
import UserController from "./app/controllers/UserController";


const routes = new Router();

routes.post("/users",  UserController.store);

//module.exports = routes
export default routes;
