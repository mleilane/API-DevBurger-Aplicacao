// classe para representar o model de usuario
// mapeamento das informaçoes que tem no banco de dados

//sequelize - facilita o trabalho com banco de dados relacionais
// Model - Classe que representa o modelo de dados

import Sequelize, { Model } from 'sequelize'; // importando o sequelize e model da biblioteca sequelize
import bcrypt from 'bcrypt';
import { password } from '../../config/database';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        //atributos ue o modelo User terá
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10);
      }
    });
    return this;
  }
  async checkPassword(password) {
    return bcrypt.compare(password, this.password_hash); //comparando se a senha digitada é igual a senha que o user cadastrou
  }
}

export default User; //exportando o modeloUser para usar em outras partes do codigo
