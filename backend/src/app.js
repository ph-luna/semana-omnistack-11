/**
 * Métodos HTTP:
 * 
 *    GET: Buscar uma informação do back-end
 *    POST: Criar uma informação no back-end
 *    PUT: Alterar uma informação no back-end
 *    DELETE: Deltar uma informação no back-end
 */

 /**
  * Tipos de parâmetros: 
  * 
  *     Query params: Parâmetros nomeados enviados na rota após o simbolo de "?"
  *         servem para filtors, paginação etc.
  *     
  *     Route params: Parametros utilizados para identificar recursos
  * 
  *     Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   *    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL SERVER
   *    NoSQL: MongoDB, CouchDB etc.
   */

  /**
  *     Driver: SELECT * FROM users
  *     Query Builder: table('users').select('*').where() 
  */


const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const { errors } = require('celebrate')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app