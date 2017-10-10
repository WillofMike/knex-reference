
exports.up = function(knex, Promise) {
  return Promise.all ([
  knex.schema.createTable('lightsabers', (table) => {
    table.increments();//creates the table sequence
    table.string('color');//here we determine what type

  })
  ])
};
//This is the opposite of the up table
exports.down = function(knex, Promise) {
  return Promise.all([
  knex.schema.dropTable('lightsabers')
 ])
};
