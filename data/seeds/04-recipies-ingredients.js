exports.seed = function(knex, Promise)
{
    return knex('recipies_ingredients').insert(
        [
            {recipie_id: 1, ingredient_id: 1, quantity: 6},
            {recipie_id: 1, ingredient_id: 2, quantity: 1},
            {recipie_id: 1, ingredient_id: 3, quantity: 1},
            {recipie_id: 2, ingredient_id: 4, quantity: 3},
            {recipie_id: 2, ingredient_id: 5, quantity: 0.5},
            {recipie_id: 3, ingredient_id: 6, quantity: 2.0},
            {recipie_id: 3, ingredient_id: 7, quantity: 4},
            {recipie_id: 3, ingredient_id: 8, quantity: 1},
            {recipie_id: 3, ingredient_id: 9, quantity: 1},
            {recipie_id: 3, ingredient_id: 10, quantity: 8},
            {recipie_id: 3, ingredient_id: 11, quantity: 0.25},
            {recipie_id: 3, ingredient_id: 12, quantity: 2.7},
        ]
    )
}