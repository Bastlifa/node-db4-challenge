const db = require('../data/db-config')

module.exports =
{
    getRecipies,
    getShoppingList,
    getInstructions
}

function getRecipies()
{
    return db('recipies')
        .then(recipies =>
            {
                return recipies
            })
}

function getShoppingList(id)
{
    return db('recipies as r')
        .join('recipies_ingredients as ri', 'ri.recipe_id', '=', 'r.id')
        .join('ingredients as i', 'ri.ingredient_id', '=', 'i.id')
        .select('ri.quantity', 'i.name')
        .where({'r.id': id})
            .then(list =>
                {
                    return list
                })
}

function getInstructions(id)
{
    return db('recipies as r')
        .join('recipies_steps as rs', 'rs.recipe_id', '=', 'r.id')
        .join('steps as s', 'rs.step_id', '=', 's.id')
        .select('s.step')
        .orderBy('s.step_number')
        .where({'r.id': id})
            .then(list =>
                {
                    return list
                })
}

