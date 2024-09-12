//const app = require('./app') //importando o app
import app from "./app.js"; //importando o app de uma forma mais moderna - instalar surcrase -D

app.listen(3001, () => console.log("Server rodando na porta 3001...")); // conectamos na porta 3001 e imprimos a msg
