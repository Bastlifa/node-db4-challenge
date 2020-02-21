exports.seed = function(knex, Promise)
{
    return knex('ingredients').insert(
        [
            {name: 'Chicken Drumsticks'},
            {name: 'Tbsp Garlic Salt'},
            {name: 'Tbsp Cayenne Pepper'},
            {name: 'Eggs'},
            {name: 'Tbsp Butter'},
            {name: 'Cups Short Grain Rice'},
            {name: 'Sheets of Nori'},
            {name: 'Large Cucumber'},
            {name: 'Tbsp Sessami Seeds'},
            {name: 'Crab Sticks'},
            {name: 'Cups Rice Vinegar'},
            {name: 'Cups Water'},
        ]
    )
}