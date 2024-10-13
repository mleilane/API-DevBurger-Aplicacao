// classe para representar o model de usuario
// mapeamento das informaçoes que tem no banco de dados 

//sequelize - facilita o trabalho com banco de dados relacionais 
// Model - Classe que representa o modelo de dados 

import Sequelize, { Model } from 'sequelize'; // importando o sequelize e model da biblioteca sequelize

class User extends Model {
  static init(sequelize) {
    super.init(
      { //atributos ue o modelo User terá 
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );
  }
}

export default User; //exportando o modeloUser para usar em outras partes do codigo 
