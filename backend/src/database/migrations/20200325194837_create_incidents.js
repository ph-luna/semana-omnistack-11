
exports.up = function(knex) {
    return knex.schema.createTable('incidents', table => {
        // primary key
        table.increments()
        
        //columns
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()

        // foreign key
        table.string('ong_id').notNullable() 
        table.foreign('ong_id').references('id').inTable('ongs')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
};
