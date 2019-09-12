exports.seed = function(knex, Promise)
{
    return knex('recipies')
    .insert(
        [
            {
                name: 'Chicken Drumsticks'
            },
            {
                name: 'Scrambled Eggs'
            },
            {
                name: 'Eli\'s California Roll'
            },
        ])
}