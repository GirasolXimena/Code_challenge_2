console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    getAllJokes();
    $( `#addJokeButton`).on(`click`, addNewJoke)
}
function addNewJoke() {
    let $whoseJokeTarget = $(`#whoseJokeIn`).val();
    let $questionInTarget = $(`#questionIn`).val();
    let $punchLineInTarget = $(`#punchlineIn`).val();
    console.log($whoseJokeTarget, $questionInTarget, $punchLineInTarget);

    if ($whoseJokeTarget == '' || $questionInTarget == '' || $punchLineInTarget == '') {
        alert(`Please fill in all forms before continuing!`)
    } else {
    let newJoke = 
    {
        whoseJoke: $whoseJokeTarget,
        jokeQuestion: $questionInTarget,
        punchLine: $punchLineInTarget
    }
        allJokes.push(newJoke);
        displayAllJokes();

}};
function displayAllJokes() {
    console.log('displaying all jokes');
    let $jokeTarget = $(`#outputDiv`);
    $jokeTarget.empty();
    console.log(allJokes);
    
    for (joke of allJokes) {
    console.log(joke.whoseJoke);
         $jokeTarget.append(`
         <ul class= "card">
            <li>Whose joke: ${joke.whoseJoke}</li>
            <li>Joke Question: ${joke.jokeQuestion}</li>
            <li>Punchline: ${joke.punchLine}
         </ul>
        
        
        
    `)
    
}};
function getAllJokes() {
    $.ajax({
        method: 'GET',
        url: 'jokes/'
    }).then(function(response) {
        console.log('Result of getAllJokes', response);
        allJokes = response;
        displayAllJokes(response);
    })
}