//este arquivo e usado para coneccao com o banco de dados
const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;