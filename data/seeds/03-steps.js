exports.seed = function(knex, Promise)
{
    return knex('steps')
    .insert(
        [
            {
                step: 'Preheat oven',
                step_number: 1
            },
            {
                step: 'Wash chicken',
                step_number: 2
            },
            {
                step: 'Add garlic salt',
                step_number: 3
            },
            {
                step: 'Add cayenne pepper',
                step_number: 4
            },
            {
                step: 'Put in oven',
                step_number: 5
            },
            {
                step: 'Flip after half an hour',
                step_number: 6
            },
            {
                step: 'Flip after twenty more minutes',
                step_number: 7
            },
            {
                step: 'Take out after five more minutes',
                step_number: 8
            },
            {
                step: 'Crack open eggs',
                step_number: 1
            },
            {
                step: 'Beat eggs in bowl',
                step_number: 2
            },
            {
                step: 'Add butter to pan',
                step_number: 3
            },
            {
                step: 'Turn on heat, wait until butter melts',
                step_number: 4
            },
            {
                step: 'Dump eggs into pan',
                step_number: 5
            },
            {
                step: 'Scramble until not runny',
                step_number: 6
            },
            {
                step: 'Wash rice thoroughly',
                step_number: 1
            },
            {
                step: 'Place into rice maker with water',
                step_number: 2
            },
            {
                step: 'Peel and slice cucumbers Julianne',
                step_number: 3
            },
            {
                step: 'Slice crab sticks into 3 parts each',
                step_number: 4
            },
            {
                step: 'Cut nori in half',
                step_number: 5
            },
            {
                step: 'When rice is finished, add sessami seeds, rice vinegar',
                step_number: 6
            },
            {
                step: 'Mix rice, allow vinegar to evaporate',
                step_number: 7
            },
            {
                step: 'Lay nori on sushi mat',
                step_number: 8
            },
            {
                step: 'Spread rice onto nori',
                step_number: 9
            },
            {
                step: 'If making inside out roll, flip nori over (use seran wrap if needed)',
                step_number: 10
            },
            {
                step: 'Place 1/8 of your cucumber and crabstick onto the center of nori',
                step_number: 11
            },
            {
                step: 'Roll nori. If you haven\'t yet, use seran wrap to keep it from drying out',
                step_number: 12
            },
            {
                step: 'Repeat until all rolls made',
                step_number: 13
            },
        ])
}