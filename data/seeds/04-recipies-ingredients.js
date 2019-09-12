exports.seed = function(knex, Promise)
{
    return knex('recipies_ingredients').insert(
        [
            {recipe_id: 1, ingredient_id: 1, quantity: 6},
            {recipe_id: 1, ingredient_id: 2, quantity: 1},
            {recipe_id: 1, ingredient_id: 3, quantity: 1},
            {recipe_id: 2, ingredient_id: 4, quantity: 3},
            {recipe_id: 2, ingredient_id: 5, quantity: 0.5},
            {recipe_id: 3, ingredient_id: 6, quantity: 2.0},
            {recipe_id: 3, ingredient_id: 7, quantity: 4},
            {recipe_id: 3, ingredient_id: 8, quantity: 1},
            {recipe_id: 3, ingredient_id: 9, quantity: 1},
            {recipe_id: 3, ingredient_id: 10, quantity: 8},
            {recipe_id: 3, ingredient_id: 11, quantity: 0.25},
            {recipe_id: 3, ingredient_id: 12, quantity: 2.7},
        ]
    )
}