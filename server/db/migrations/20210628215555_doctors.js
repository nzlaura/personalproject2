exports.up = function (knex) {
  return knex.schema.createTable('doctors', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('practice')
    table.string('email')
    table.integer('shared_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('doctors')
}
