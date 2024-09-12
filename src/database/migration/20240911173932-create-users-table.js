/** @type {import('sequelize-cli').Migration} */

// UP -> metodo fazer, exemplo criar uma tabela
// DOWN -> desfaz o método UP

//aqui estamos criando a tabela usuario e determinando os tipos de cada coluna 
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      //definicao coluna ID 
      id: {
        primaryKey: true, // Define 'id' como a chave primária
        allowNull: false,// Não permite valores nulos
        type: Sequelize.UUID, // Tipo de dados UUID para o identificador
        defaultValue: Sequelize.UUIDV4, // Define um valor padrão gerado automaticamente como UUID v4
      },

      // definição coluna name 
      name: {
        type: Sequelize.STRING, // Tipo de dados STRING para armazenar o nome
        allowNull: false,// Não permite valores nulos
      },

      //definição coluna email
      email: {
        type: Sequelize.STRING, // Tipo de dados STRING para armazenar o email
        allowNull: false, // Não permite valores nulos
        unique: true, // Garante que cada email seja único na tabela
      },

      //definição da coluna de senha 
      password_hash: {
        type: Sequelize.STRING, // Tipo de dados STRING para armazenar o hash da senha
        allowNull: false, // Não permite valores nulos
      },

      //definição coluna admin (administrador) 
      admin: {
        type: Sequelize.BOOLEAN, // Tipo de dados BOOLEAN para indicar se o usuário é administrador
        defaultValue: false, // Define o valor padrão como false
      },

      // Definição da coluna 'created_at'
      created_at: {
        type: Sequelize.DATE, // Tipo de dados DATE para armazenar a data de criação
        allowNull: false, // Não permite valores nulos
      },

      // Definição da coluna 'updated_at'
      updated_at: {
        type: Sequelize.DATE, // Tipo de dados DATE para armazenar a data de atualização
        allowNull: false,  // Não permite valores nulos
      },
    });
  },

  // Função chamada quando a migração é revertida para desfazer a criação da tabela
  async down(queryInterface) {
        // Remove a tabela 'users' criada pela migração
    await queryInterface.dropTable('users');
  },
};


// para criar a tabela conforme configuramos rode o comando: yarn sequelize db:migrate
// para desfazer use: yarn sequelize db:migrate:undo:all (excluiria a tabela que criamos agora)