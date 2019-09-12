const express = require('express')

const recipies = require('./recipiesHelper')

const router = express.Router()

router.get('/', (req, res) =>
{
    recipies.getRecipies()
        .then(response =>
            {
                res.status(200).json(response)
            })
        .catch(error =>
            {
                res.status(500).json({ errorMessage: "could not retrieve recipies" })
            })
})

router.get('/:id/shoppingList', (req, res) =>
{
    const id = req.params.id
    recipies.getShoppingList(id)
        .then(response =>
            {
                console.log(response)
                if(response.length > 0)
                {
                    
                    res.status(200).json(response)
                }
                else
                {
                    res.status(404).json({ errorMessage: "" })
                }
            })
        .catch(err =>
            {
                console.log(err)
                res.status(500).json({ errorMessage: `Could not get shopping list` })
            })
})

router.get('/:id/instructions', (req, res) =>
{
    const id = req.params.id
    recipies.getInstructions(id)
        .then(response =>
            {
                console.log(response)
                if(response.length > 0)
                {
                    
                    res.status(200).json(response)
                }
                else
                {
                    res.status(404).json({ errorMessage: "" })
                }
            })
        .catch(err =>
            {
                console.log(err)
                res.status(500).json({ errorMessage: `Could not get instructions list` })
            })
})


module.exports = router