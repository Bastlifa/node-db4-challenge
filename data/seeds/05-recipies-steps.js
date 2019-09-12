exports.seed = function(knex, Promise)
{
    return knex('recipies_steps').insert(
        [
            {recipie_id: 1, step_id: 1},
            {recipie_id: 1, step_id: 2},
            {recipie_id: 1, step_id: 3},
            {recipie_id: 1, step_id: 4},
            {recipie_id: 1, step_id: 5},
            {recipie_id: 1, step_id: 6},
            {recipie_id: 1, step_id: 7},
            {recipie_id: 1, step_id: 8},
            {recipie_id: 2, step_id: 9},
            {recipie_id: 2, step_id: 10},
            {recipie_id: 2, step_id: 11},
            {recipie_id: 2, step_id: 12},
            {recipie_id: 2, step_id: 13},
            {recipie_id: 2, step_id: 14},
            {recipie_id: 3, step_id: 15},
            {recipie_id: 3, step_id: 16},
            {recipie_id: 3, step_id: 17},
            {recipie_id: 3, step_id: 18},
            {recipie_id: 3, step_id: 19},
            {recipie_id: 3, step_id: 20},
            {recipie_id: 3, step_id: 21},
            {recipie_id: 3, step_id: 22},
            {recipie_id: 3, step_id: 23},
            {recipie_id: 3, step_id: 24},
            {recipie_id: 3, step_id: 25},
            {recipie_id: 3, step_id: 26},
            {recipie_id: 3, step_id: 27},
        ]
    )
}