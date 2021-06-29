exports.seed = function (knex) {
  return knex('doctors').del()
    .then(function () {
      return knex('table_name').insert([
        { id: 1, name: 'Dr Jan Sinclair', practice: '188 Specialist Centre', email: 'reception@specialistcentre.co.nz', shared_id: '101' },
        { id: 2, name: 'Dr Rohan Ameratunga', practice: 'Grafton Specialists', email: 'no email listed', shared_id: '101' },
        { id: 3, name: 'Dr Suniti Bisht', practice: 'Kids Allergy Hamilton', email: 'admin@kidsallergy.co.nz', shared_id: '102' }
      ])
    })
}
