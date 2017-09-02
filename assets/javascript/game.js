var fruitWords = ["apple", "papaya", "tangerine", "cantaloupe", "lychee"];

//Randomly chooses a choice from furitWords. 
var userGuess = fruitWords[Math.floor(Math.random() * fruitWords.length)];


//Globals
var guess = 0;
var lives = 10; 
var winCount = 0;
var loseCount = 0;

var wrongLetter

//Store guesses
var correctGuess = [];
var wrongGuesses = [];


function startUp() {
    for (var i = 0; i < userGuess.length; i++) {
        correctGuess[i] = "_";
    }

    guess = correctGuess.join(" ");
    document.getElementById("answer").innerHTML = guess;

//Doesnt work...
 for (var i = 0; i > userGuess.length; i++) {
    wrongLetter[i] = wrongGuesses.join(""); 
    document.getElementById("wrongGuesses").innerHTML = "Wrong: " + wrongLetter;
  }
}
//Letters that the user types in
function Letter() {
    var letter = document.getElementById("letter").value;
    if (letter.length > 0) {
        for (var i = 0; i < userGuess.length; i++) {
            if (userGuess[i] === letter) {
                correctGuess[i] = letter;
            }
        }
        lives--;
        document.getElementById("lives").innerHTML = "You have " + lives + " lives ";
        document.getElementById("answer").innerHTML = correctGuess.join(" ");
        // document.getElementById("wrongGuesses").innerHTML = "Wrong: " + wrongLetter;

    }

//winCount and loseCount doesn't work...
    document.getElementById("winCounter").innerHTML = "Wins: " + winCount;
    document.getElementById("lossCounter").innerHTML = "Losses: " + loseCount;
}


//This function doesn't work...
function winlose() {
    if (correctGuess === letter) {
        winCount++;
        alert('You win!');
        empty();
    } else if (lives === 0) {
        loseCount++;
        alert('You lost.');
        empty();
    }
}

$s("#clear").on("click", function() {
    $("#guess").empty();
});