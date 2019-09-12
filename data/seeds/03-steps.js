exports.seed = function(knex, Promise)
{
    return knex('steps')
    .insert(
        [
            {
                step: 'Preheat oven'
            },
            {
                step: 'Wash chicken'
            },
            {
                step: 'Add garlic salt'
            },
            {
                step: 'Add cayenne pepper'
            },
            {
                step: 'Put in oven'
            },
            {
                step: 'Flip after half an hour'
            },
            {
                step: 'Flip after twenty more minutes'
            },
            {
                step: 'Take out after five more minutes'
            },
            {
                step: 'Crack open eggs'
            },
            {
                step: 'Beat eggs in bowl'
            },
            {
                step: 'Add butter to pan'
            },
            {
                step: 'Turn on heat, wait until butter melts'
            },
            {
                step: 'Dump eggs into pan'
            },
            {
                step: 'Scramble until not runny'
            },
            {
                step: 'Wash rice thoroughly'
            },
            {
                step: 'Place into rice maker with water'
            },
            {
                step: 'Peel and slice cucumbers Julianne'
            },
            {
                step: 'Slice crab sticks into 3 parts each'
            },
            {
                step: 'Cut nori in half'
            },
            {
                step: 'When rice is finished, add sessami seeds, rice vinegar'
            },
            {
                step: 'Mix rice, allow vinegar to evaporate'
            },
            {
                step: 'Lay nori on sushi mat'
            },
            {
                step: 'Spread rice onto nori'
            },
            {
                step: 'If making inside out roll, flip nori over (use seran wrap if needed)'
            },
            {
                step: 'Place 1/8 of your cucumber and crabstick onto the center of nori'
            },
            {
                step: 'Roll nori. If you haven\'t yet, use seran wrap to keep it from drying out'
            },
            {
                step: 'Repeat until all rolls made'
            },
        ])
}