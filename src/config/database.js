module.exports = {
  dialect: 'postgres', //banco de dados que esta sendo utilizado 
  host: 'localhost', //endereço do servidor onde o BD esta hospedado 
  port: 5433, //porta de conexão 
  username: 'postgres', //usuario 
  password: 'postgres', //senha 
  database: 'devburger', //nome do banco de dados
  define: {  // conf. globais que o sequelize aplicará a todos as tabelas do BD 
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

/* timestamps: true, -> Indica que o Sequelize deve criar 
automaticamente os campos createdAt e updatedAt nas tabelas do BD. 
Esses campos armazenam a data e hora de criação e atualização de registros. 
*/

/*underscored: true, -> faz o sequelize  usar snake_case para os nomes das colunas do BD*/

/*underscoredAll: true, -> semelhante ao underscored, mas aplica a nomes 
das tabelas mantendo o padrão do snake_case*/
