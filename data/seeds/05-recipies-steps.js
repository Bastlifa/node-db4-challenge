exports.seed = function(knex, Promise)
{
    return knex('recipies_steps').insert(
        [
            {recipe_id: 1, step_id: 1},
            {recipe_id: 1, step_id: 2},
            {recipe_id: 1, step_id: 3},
            {recipe_id: 1, step_id: 4},
            {recipe_id: 1, step_id: 5},
            {recipe_id: 1, step_id: 6},
            {recipe_id: 1, step_id: 7},
            {recipe_id: 1, step_id: 8},
            {recipe_id: 2, step_id: 9},
            {recipe_id: 2, step_id: 10},
            {recipe_id: 2, step_id: 11},
            {recipe_id: 2, step_id: 12},
            {recipe_id: 2, step_id: 13},
            {recipe_id: 2, step_id: 14},
            {recipe_id: 3, step_id: 15},
            {recipe_id: 3, step_id: 16},
            {recipe_id: 3, step_id: 17},
            {recipe_id: 3, step_id: 18},
            {recipe_id: 3, step_id: 19},
            {recipe_id: 3, step_id: 20},
            {recipe_id: 3, step_id: 21},
            {recipe_id: 3, step_id: 22},
            {recipe_id: 3, step_id: 23},
            {recipe_id: 3, step_id: 24},
            {recipe_id: 3, step_id: 25},
            {recipe_id: 3, step_id: 26},
            {recipe_id: 3, step_id: 27},
        ]
    )
}