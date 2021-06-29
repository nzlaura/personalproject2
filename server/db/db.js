const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  getDoctors
}

function getWidgets (db = connection) {
  return db('widgets').select()
}

function getDoctors (db = connnection) {
  return db('doctors').select()
}
