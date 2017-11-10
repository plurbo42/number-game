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
    $('#gamebox').css('border-radius', '15%');
    $('#gamebox').css('width', '500px');
    $('#gamebox').css('text-align', 'center');
    $('#gamebox').append('<p id="clue"><p>');
    $('#gamebox').on('click', '#submit', submitGuess);
    $('#gamebox').on('click', '#newGameButton', newGame);
    $('#gamebox').on('keypress', submitGuess); //this doesn't work 100% as intended, but the game still works on enter or submit
}

var randomNumber = null

function newGame() {
    console.log('in newGame');
    $inputBox = $('<input type="text" id="numberGuess"/>');
    $('#gamebox').append($inputBox);
    randomNumber = Math.floor((Math.random() * 10) + 1);
    $('#newGameButton').replaceWith('<button id="submit">Submit</button>');
    $('#gamebox').css('background-color', 'royalblue')
    $('#clue').replaceWith('<p id="clue"><p>')
}

function submitGuess() {
    var guessedNumber = $('#numberGuess').val();
    console.log('Guessed number is: ', guessedNumber, 'Random number is: ', randomNumber);
    if(guessedNumber > randomNumber){
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
    }else{
        $('#gamebox').css('background-color', 'red');
        $('#clue').replaceWith('<p id="clue">THAT\'S NO NUMBER<p>')}
    }