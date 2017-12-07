$(document).ready(function(event) {

//variables//
var hint1= ["Main characters are named after same characters in the jungle book"],
var hint2= ["Crime fighting duck that was similar to batman"],
var hint3= ["A rich duck with a lot of coines to swim in"],
var hint4= ["Stone statues that become real after dark"],
var hint5= ["His best friend is named Skeeter"],
var hint6= ["Main characters on the show are babies"]
}
//variables

var wins = 0;
var loss = 0;
var wordsUsed = {};
var guessesLeft = 9;
var blankSpots = [];
var userGuesses = [];
var wordChoices;
var winCounter= 0;
var words = ["Talespin", "Darkwing Duck", "Ducktales", "Gargolyes", "Doug", "Rugrats"];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userGuess = event.key;
//Function

function startGame(){
	//picks random word
	wordChoices = words[Math.floor(Math.random() * words.length)];
	console.log (wordChoices);

	for( var j = 0; j < wordChoices.length; j++){
		console.log(j)
			blankSpots.push("_");
	}
//Puts Underscore on html
	document.getElementById("word-blanks").textContent = blankSpots.join(" ");

	//reset
	wordsUsed = [];
	guessesLeft = 9;

	//html
	document.getElementById("guesses-left").textContent = guessesLeft;


}
function winLose(){
	if(winCounter === wordChoices.length){
		alert("winner");
	}
		else if(guessLeft ===0){
			alert("loser");
			//startGame();
		}
}

	//User Guess
	document.onkeyup = function(event){
		userGuesses = event.key;
		//Checks for the word content
		if(wordChoices.indexOf(userGuesses) > -1){
			
			for(var i = 0; wordChoices.length; i++){
				
				if(wordChoices[i] === userGuesses){

					blankSpots[i] = userGuesses;

					winCounter++;
					winlose();
				}
			}

	}
		else{
			wordsUsed.push(userGuesses);
			guessesLeft--;
			winLose();
		}
		
}

for(var i = 0; i<hints.length i++)


var Words =["Talespin", "Darkwing Duck", "Ducktales", "Gargolyes", "Doug", "Rugrats"]


var html{
	"<div id>"
}


      /*  //for (var i = 0; i < hints.length i++);
         var letterchoice;
        var count = 0;
        var answerArray = [];

        
        var currentWord = words[Math.floor(Math.random() * words.length)];
        answerArray = words[currentWord].split('');
        //functions




        // global variables 


        // filling the answer array with underscores as required
        // display blanks for puzzle
        var blankSpot = document.getElementById("underscore");
        var showBlanks = " ";

        for (var i = 0; i < puzzle.length; i++) {
            showBlanks += "<span class='" + answerArray[i] + "'> _ </span>";
        }
        blankSpot.innerHTML = showBlanks;


        // display letters of alphabet
        var userInterface = document.getElementById('buttons');
        var interfaceHTML = " ";

        for (var j = 0; j < letters.length; j++) {
            interfaceHTML += '<button class="click btn btn-warning btn-sm">' + letters[j] + '</button>';
        }
        userInterface.innerHTML = interfaceHTML;

        // when the user clicks a letter
        /* var userChoices = document.getElementsByClassName("keydown");

         for (var k = 0; k < userChoices.length; k++) {
             userChoices[k].addEventListener("keydown", function(event) {
                 var btn = evt.target;
                 var letter = btn.innerText;
                 btn.disabled = true;

                 if (answerArray.indexOf(letter) === -1) {
                     countDown--;
                     badAnswer.play();
                     // update hangman pic. according to countdown state
                     stickman.src = './assets/images/' + countDown + '.jpg';

                     if (countDown === 0) {
                         var puzzleJoin = puzzle.join('');
                         alert("Game Over!!! The answer was " + puzzleJoin + " Try again?");
                         hangman();
                         //reset photo src here
                         stickman.src = './assets/images/8.jpg';
                     }
                 } else {
                     var solvePuzzle = document.getElementsByClassName(letter);

                     for (var l = 0; l < solvePuzzle.length; l++) {
                         solvePuzzle[l].innerText = letter;
                         goodAnswer.play();
                     }
                     // if puzzle solved, show 'you won' and reset game.
                     checkPuzzle()
                 }

             })
        var guessesLeft = 9;

        document.onkeypress = function(keyPressed) {
            var keyPressed = keyPressed || window.event,
                charCode = keyPressed.keyCode || keyPressed.which,
                lettersGuessed = String.fromCharCode(charCode);

            // var userGuess = prompt("What word do you guess?");
            // var userGuess = words.split('');
            // var userGuess
            // if (words.indexOf(userGuess) > -1) {
            //  alert("Your guess is correct.")
            // }else {
            //  alert("Your guess is wrong.")
            // }

            document.getElementById("wordused").innerHTML += lettersGuessed;
            document.getElementById("guessesLeft").innerHTML = guessesLeft;

            guessesLeft--;

            if (guessesLeft === -1) {
                alert("You Loose!");



    */


