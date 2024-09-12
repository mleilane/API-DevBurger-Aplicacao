//const express = require('express'); //importação do modulo express (biblioteca para criar servidores web em node.js
//const routes = require('./routes');

// importando ambos de uma forma mais recente
import express from "express";
import routes from "./routes.js";

class App {
  constructor() {
    this.app = express(); // Inicializa o express
    this.middlewares(); //chama o metodo middlewares
    this.routes(); // chama o metodo routes
  }

  middlewares() {
    this.app.use(express.json()); //Adiciona um middleware que faz o servidor interpretar requisições com JSON
  }

  routes() {
    this.app.use(routes);
  }
}

//module.exports = new App().app
export default new App().app; //mesma coisa, so que forma mais atualizada
