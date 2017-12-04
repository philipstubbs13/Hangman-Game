//Global Variables
//==================================================================
//Arrays and Variables
	//Pre-defined list of words to choose from
	var options = ["warriors" , "celtics" , "suns"];

	//Computer chooses random word from list
	var randomWord = "";

	//Array/list of letters in a word
	var lettersInWord = [];

	//Number of underscores
	var numberUnderscoresNeeded = 0;


	var underscoresSuccesses = [];

	//Array/list of letters not in a word.
	var lettersNotInWord = [""]; 
	var lettersNotInWordList = [ ];

	//wins, losses, guesses remaining
	var wins = 0;
	var losses = 0;
	var guessesRemainder = 8;

	//User's guess - the letter the user chooses.
	var userGuess = "";

	//possible values the user can choose on the keyboard.
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i" , "j" , "k" ,  "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u", "v", "w", "x", "y", "z"];

	var wrongGuess = "";

//Functions (Reusable blocks of code that I will call uponn when needed)
//===================================================================
function start () {
	//Randomly generate word from options array.
	var randomWord = options[Math.floor(Math.random() * options.length)];
	console.log(randomWord);
	
	//JavaScript String split() Method: https://www.w3schools.com/jsref/jsref_split.asp
	//The split() method is used to split a string into an array of substrings, and returns the new array.
	//Split the letters of current word and put in new array called lettersInWord.
	lettersInWord = randomWord.split("");
	console.log(lettersInWord);

	//Determine number of underscores needed based on length of lettersInWord array.
	numberUnderscoresNeeded = lettersInWord.length;
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

	document.onkeyup = function(event) {

			//Determines wich key was pressed.
			//Need to determine whether the user pressed a letter, number, or anything else.
			//https://stackoverflow.com/questions/34687895/determine-if-a-letter-or-a-number-was-pressed-javascript
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

			//If user pressed anything on the keyboard but a letter...
			if (alphabet.indexOf(userGuess) === -1) {
				alert("Not a letter. Please select a letter (a-z) to continue.");
			}

			//If user pressed a letter, game starts. Go to checkLetters...
			else  {
			// Alphabet letter
			alert("letter");
			alert(userGuess);
			checkLetters(userGuess);
			}
	}


}

function checkLetters(userGuess) {
	//I want to check if the letter the user guesses exists in the word.
	//Need to find out if letter was already guessed by the user. If true, notify the user to select another letter.
	if (lettersNotInWordList.indexOf(userGuess) > -1) {
		alert("You already guessed that letter. Pick another letter.")
		}

	//If user did not already pick letter, push letter to the lettersNotInWordList array.
	else {
		lettersNotInWordList.push (userGuess);
		//Test push method
		console.log (lettersNotInWordList);

		//Write "Letters you already guessed" to div in html with id = lettersGuessed-Header.
		$("#lettersGuessed-Header").html("<p>Letters you already guessed</p>");
		//Write guessed letter to dic in html with id = lettersGuessed.
		$("#lettersGuessed").html(lettersNotInWordList);
	}

	//Need to figure out if the guessed letter is in the random word that was generated...
	for(i = 0; i < numberUnderscoresNeeded; i++){
		//If letter that the user guessed was found in the random word....
    	if (userGuess === lettersInWord[i]) {
        alert("letter found");
		underscoresSuccesses[i] = userGuess;
		console.log(lettersInWord[i]);
		}

		//Else, if letter that the user guessed was not found in the random word...
		//Note, we have already added the guessed word to the lettersNotInWordList.
		else {

		}
	}
}

	

	     		//If letter that the user guessed was not found in the random word....
	     		//if (randomWord.indexOf(userGuess) === -1 && alphabet.indexOf(userGuess) > -1 && userGuess != lettersInWord[i]) {
		        	//alert("letter not found");
		        	//var lettersNotInWordList = [];




						//else if (lettersNotInWordList.indexOf(userGuess) === -1) {
							//var lettersNotInWordList = [];
					
							//guessesRemainder--;
							//console.log(guessesRemainder);
						//}

				


		//for (var i=0; i < numberUnderscoresNeeded ; i++ ){
			//letter was found.
			// if (lettersInWord[i] > -1) {
			//alert("letter found");
			//isletterInWord = true;
			//underscoresSuccesses[i] = userGuess;
			//console.log(lettersInWord[i]);
			//}

			//letter wasn't found.
			//else if (lettersInWord[i] == -1) {
			//	isletterinWord = false;
			//	lettersNotInWord.push(userGuess);
			//	guessesRemainder--;
			//	document.getElementById("LettersGuessed").innerHTML = lettersNotInWord.join(" ");
			//	document.getElementById("guessesLeft").innerHTML = guessesRemainder;
			//}
		//}
//	}



		

		//Check where in the word the letter exists, then populate underscores and success array
		//if (isletterInWord) {
		 //for (var i = 0; i < numberUnderscoresNeeded; i++) {
			//if (lettersWord[i] == userGuess) {
			//	underscoresSuccesses[i] = userGuess;
			//}
		//}
	//}

	//console.log(underscoresSuccesses);



/*
function roundComplete() {
	console.log("Win Count: " + wins + " | loss Count: "+ losses + " | Guesses Left: " + guessesRemainder);

	//I need to update the HTML with guesses remaining, underscores and successes, and letters already guessed.
	document.getElementById("guessesLeft").innerHTML = guessesRemainder;
	document.getElementById("underscore").innerHTML = underscoresSuccesses.join("");
	//document.getElementById("lettersGuessed").innerHTML = lettersNotInWord.join("");
	document.getElementById("lettersGuessed").innerHTML = lettersNotInWord.join;
	console.log(lettersNotInWord.join);

	//I want to check if the user won. If the user won, lettersWord (for example, "c","e","l","t","i","c","s" equals underscores and successes.
	if (lettersInWord.toString() == underscoresSuccesses.toString()) {
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
}*/

//Process - Execute the code. Do not place anything else below this line.
//===================================================================

//Starts/resets the code/game
start();

//When the user presses a key...

checkLetters (userGuess);

	//roundComplete();
