console.log('js-sourced');

//random number variable 

//make ui

//source in javascript, source in jquery

//make event listeners and docready function

//make submit test function

//make new game function

$(document).ready(onReady);

function onReady() {
    $('#gamebox').css('border', 'solid', 'black');
    $('#gamebox').append('<button id="newGameButton">New Game</button>');
    $('#gamebox').css('border-radius', '25%');
    $('#gamebox').css('width', '500px');
    $('#gamebox').css('text-align', 'center');
    $('#gamebox').append('<p id="clue"><p>');
    // $('#gamebox').append('<p id="counter">Guess Counter:' + guessCounter + '<p>'); //commenting out Guess Count for now
    $('#gamebox').on('click', '#submit', submitGuess);
    $('#gamebox').on('click', '#newGameButton', newGame);
    //$('#gamebox').on('keypress', submitGuess); //this is causing some weird behaviour and likely needs a keybinding to work as expected. Removing for now 
}

var randomNumber = null;
// var guessCounter = 0;

function newGame() {
    console.log('in newGame');
    $inputBox = $('<input type="text" id="numberGuess"/>');
    $('#gamebox').append($inputBox);
    randomNumber = Math.floor((Math.random() * 10) + 1);
    $('#newGameButton').replaceWith('<button id="submit">Submit</button>');
    $('#gamebox').css('background-color', 'royalblue')
    $('#clue').replaceWith('<p id="clue"><p>')
    // guessCounter = 0;
    // $('#counter').replaceWith('<p id="counter">Guess Counter: <p>');
}

function submitGuess() {
    // guessCounter ++
    // $('#counter').replaceWith('<p id="counter">Guess Counter:' + guessCounter + '<p>');
    var guessedNumber = $('#numberGuess').val();
    console.log('Guessed number is: ', guessedNumber, 'Random number is: ', randomNumber);
    if(guessedNumber == ''){
        $('#gamebox').css('background-color', 'red');
        $('#clue').replaceWith('<p id="clue">YOU DIDN\'T ENTER ANYTHING<p>') //error handling
    }else if(guessedNumber > 10 || guessedNumber < 1){
        $('#gamebox').css('background-color', 'red');
        $('#clue').replaceWith('<p id="clue">READ THE DIRECTIONS<p>') //error handling
    }else if(guessedNumber > randomNumber){
        $('#gamebox').css('background-color', 'orange')
        $('#clue').replaceWith('<p id="clue">TOO BIG<p>')
    }else if(guessedNumber < randomNumber){
        $('#gamebox').css('background-color', 'yellow')
        $('#clue').replaceWith('<p id="clue">TOO SMALL<p>')
    }else if(guessedNumber == randomNumber){
        $('#gamebox').css('background-color', 'green')
        $('#clue').replaceWith('<p id="clue">DING DING DING!<p>')
        $('#submit').replaceWith('<button id="newGameButton">New Game</button>');
        $('#numberGuess').remove()
    }else if(guessedNumber == ''){
        $('#gamebox').css('background-color', 'red');
        $('#clue').replaceWith('<p id="clue">YOU DIDN\'T ENTER ANYTHING<p>') //error handling for non-numeric input
    }else{
        $('#gamebox').css('background-color', 'red');
        $('#clue').replaceWith('<p id="clue">THAT\'S NO NUMBER<p>')}
    //if/else complete

   //reset input complete
        $('#numberGuess').val('');
    }