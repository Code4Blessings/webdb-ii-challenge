
exports.up = function(knex) {
  //Remember the return
  return knex.schema.createTable('cars', tbl => {
      //id colums, interger, primary key, auto-increment
      tbl.increments();

      tbl.string('vin', 17).index();

      tbl.string('car make').index();

      tbl.string('model').index();

      tbl.integer('mileage').index();
  })
};

//Undo the changes from the up function (rollback)
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
