//Global Variables
//==================================================================
//Arrays and Variables
	//Pre-defined list of words to choose from
	var options = ["warriors" , "celtics" , "suns"];

	//Computer chooses random word from list
	var randomWord = "";

	//Array/list of letters in word
	var lettersWord = [];

	//Number of underscores
	var numberUnderscoresNeeded = 0;


	var underscoresSuccesses = [];

	//Array/list of letters not in word.
	var lettersNotInWord =[]; 

	//wins, losses, guesses remaining
	var wins = 0;
	var losses = 0;
	var guessesRemainder = 8;



//Functions (Reusable blocks of code that I will call upo when needed)
//===================================================================
function start () {
	var randomWord = options[Math.floor(Math.random() * options.length)];
	console.log(randomWord);
	
	//JavaScript String split() Method: https://www.w3schools.com/jsref/jsref_split.asp
	//The split() method is used to split a string into an array of substrings, and returns the new array.
	lettersWord = randomWord.split("");
	console.log(lettersWord);

	numberUnderscoresNeeded = lettersWord.length;
	console.log(numberUnderscoresNeeded);

	//Reset
	guessesRemainder = 8;
	lettersNotInWord = 0;
	underscoresSuccesses = [];

	//Problem: After the app generates a random word, we need a way to add the appropriate number of underscores("_") to the Current Word section
	//based on the number of letters in the word.
	//Solution: Create for loop that loops through numberUnderscoresNeeded, which equals lettersWord.length.
	for (var i=0; i < numberUnderscoresNeeded; i++ ) {
		underscoresSuccesses.push("_ ");
		console.log(underscoresSuccesses);
	}

	//Change number of underscores in Current Word section
	document.getElementById("underscore").innerHTML = underscoresSuccesses.join("");
	console.log(underscoresSuccesses.join(" "));

	//When game is started/reset, change number of guesses remaining in the HTML file.
	document.getElementById("guessesLeft").innerHTML = guessesRemainder;
	console.log(guessesRemainder);
	
	//When game is started/reset, change number of wins in the HTML file.
	document.getElementById("wins").innerHTML = wins;
	console.log(wins);

	//When game is started/reset, Change number of losses in the HTML file.
	document.getElementById("losses").innerHTML = losses;
	console.log(losses);

}

function checkLetters(letter) {
	//I want to check if the letter the user guesses exists in the word.
	alert(letter);
	var isletterInWord = false;

	//Testing
	//var letter = document.getElementById("letter").value;

	  /*if (letter.length > 0) {
    for (var i = 0; i < sharkType.length; i ++) {
      if (sharkType[i] === letter) {
        answerArray[i] = letter;
      }*/

	for (var i=0; i < numberUnderscoresNeeded ; i++ ){
		if (randomWord[i] = letter) {
			isletterInWord = true;
			alert("letter found");
		}
	}

	//}

	//Check where in the word the letter exists, then populate underscores and success array
	var isletterInWord = true;
	if (isletterInWord) {
		for (var i = 0; i < numberUnderscoresNeeded; i++) {
			if (randomWord[i] == letter) {
				underscoresSuccesses[i] = letter;
			}
		}
	}

	//letter wasn't in found.
	else {
		lettersNotInWord.push(letter);
		guessesRemainder--;
	}

	console.log(underscoresSuccesses);

}


function roundComplete() {
	console.log("Win Count: " + wins + " | loss Count: "+ losses + " | Guesses Left: " + guessesRemainder);

	//I need to update the HTML with guesses remaining, underscores and successes, and letters already guessed.
	document.getElementById("guessesLeft").innerHTML = guessesRemainder;
	document.getElementById("underscore").innerHTML = underscoresSuccesses.join("");
	//document.getElementById("lettersGuessed").innerHTML = lettersNotInWord.join("");
	document.getElementById("lettersGuessed").innerHTML = lettersNotInWord.join;
	console.log(lettersNotInWord.join);

	//I want to check if the user won. If the user won, lettersWord (for example, "c","e","l","t","i","c","s" equals underscores and successes.
	if (lettersWord.toString() == underscoresSuccesses.toString()) {
		wins++;
		alert("You won");


		//Add 1 to the number of wins in the HTML.
		document.getElementById("wins").innerHTML = wins;

		//Restart the game after winning.
		start();
	}
	//Check if user lost
	else if (guessesRemainder){
		losses++;
		alert("You lost");

		//Add 1 to the number of losses in the HTML.
		document.getElementById("losses").innerHTML = losses;

		//Restart the game after losing.
		start();
	}
}

//Process - Execute the code. Do not place anything else below this line.
//===================================================================

//Starts/resets the code/game
start();

//When the user presses a key...
document.onkeyup = function(event) {

	//Determins wich key was pressed.
	var userGuess = event.key;
	alert(userGuess);


	checkLetters(userGuess);
	roundComplete();
}