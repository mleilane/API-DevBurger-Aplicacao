import Sequelize from 'sequelize'; // Importa o Sequelize, um ORM para trabalhar com bancos de dados
import configDatabase from '../config/database'; // Importa as configurações do banco de dados
import User from '../app/models/User'; // Importa o model 'User' para usá-lo na conexão

const models = [User]; // Array de models, no caso apenas 'User', que será mapeado para o banco

class Database {
  constructor() {
    this.init(); // Ao instanciar Database, chama o método init
  }
  init() {
    this.connection = new Sequelize(configDatabase); // Inicia a conexão com o banco usando as configs
    models.map((model) => model.init(this.connection)); // Faz a conexão de cada model com o banco
  }
}

export default new Database(); // Exporta a instância da classe Database
