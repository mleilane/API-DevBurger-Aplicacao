//const {Router, request, response} = require('express') // importamos apenas o router de dentro do modulo express
import { Router } from "express";
import { password } from "./config/database";
import { v4 } from 'uuid';
import User from './app/models/User';

const routes = new Router();

routes.get("/",  async (request, response) => {
  //return response.status(200).json({ message: "Hello World!" });
  const user = await User.create({
    id: v4(),
    name: 'Leilane2',
    email: 'leilane2@email.com',
    password_hash: '123456',
  });
  return response.status(201).json(user)
});

//module.exports = routes
export default routes;
