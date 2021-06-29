exports.seed = function (knex) {
  return knex('table_name').del()
    .then(function () {
      return knex('table_name').insert([
        { id: 1, name: 'Auckland', shared_id: 101 },
        { id: 2, colName: 'Hamilton', shared_id: 102 }
      ])
    })
}
