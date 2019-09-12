
exports.up = function(knex) {
    return knex.schema
        .createTable('recipies', tbl =>
        {
            tbl.increments()
            tbl.string('name').notNullable()
        })
        .createTable('ingredients', tbl =>
        {
            tbl.increments()
            tbl.string('name').notNullable()
        })
        .createTable('steps', tbl =>
        {
            tbl.increments()
            tbl.string('step').notNullable()
        })
        .createTable('recipies_ingredients', tbl =>
        {
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipies')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl
                .integer('ingredient_id')
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.float('quantity')
            })
        .createTable('recipies_steps', tbl =>
        {
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipies')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl
                .integer('step_id')
                .unsigned()
                .references('id')
                .inTable('steps')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipies_steps')
        .dropTableIfExists('recipies_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipies')
};
