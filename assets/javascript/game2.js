//Global Variables
//==================================================================
//Arrays and Variables
	//Pre-defined list of words to choose from
	var options = ["warriors" , "celtics" , "suns" , "cavaliers" , "clippers" , "spurs" , "timberwolves" , "heat" , "raptors" , "grizzlies" , "trailblazers" , "lakers" , "wizards"];

	//Computer chooses random word from list
	var randomWord = "";

	//Creating an empty array that will hold all the letters in the random word that the computer generates.
	var lettersInWord = [];

	//Number of underscores needed for random word.
	var numberUnderscoresNeeded = 0;

	//Creating an empty array, which will be used to replace the underscores with successful guesses by the user.
	var underscoresSuccesses = [];

	//Creating an empty array to hold all the letters not in a word or that were already guessed.
	var lettersNotInWord = [""]; 
	var lettersNotInWordList = [ ];

	//Counters for wins, losses, and guesses remaining.
	var wins = 0;
	var losses = 0;
	var guessesRemainder = 13;

	//User's guess - the letter the user chooses.
	var userGuess = "";

	//Possible values the user can choose on the keyboard.
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i" , "j" , "k" ,  "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u", "v", "w", "x", "y", "z"];

//Functions - the reusable blocks of code that I will call upon when needed.
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
	guessesRemainder = 13;
	lettersNotInWord = 0;
	underscoresSuccesses = [];
	lettersNotInWordList = [ ];
	lettersNotInWord = [""];

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

	//When key is pressed...
	document.onkeyup = function(event) {
	
			//Need to determine whether the user pressed a letter, number, or anything else.
			//https://stackoverflow.com/questions/34687895/determine-if-a-letter-or-a-number-was-pressed-javascript
			//userGuess is our keyCode. Let's store the userGuess variable as a string. Also, if user has caps lock on, let's convert the letter from upper case to lower case.
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

			//If user pressed a letter, game starts (check letter against the letters in the randowm word).
			//This letter is the user's first guess. Go to checkLetters function... 
			// If anything is pressed on the keyboard but a letter, nothing happens.
			if (alphabet.indexOf(userGuess) >= 0) {
				alert("letter");
				alert(userGuess);
				checkLetters(userGuess);
			}
	}
}

function checkLetters(userGuess) {
	//I want to check if the letter the user guesses exists in the word.
	//Need to find out if letter was already guessed by the user. If already guessed by the user, notify the user to select another letter.
	if (lettersNotInWordList.indexOf(userGuess) > -1) {
		alert("You already guessed that letter. Pick another letter.")
		}

	//If user did not already pick letter from a previous guess, push letter to the lettersNotInWordList array.
	else {
		lettersNotInWordList.push (userGuess);
		//Test push method
		console.log (lettersNotInWordList);

		//Write "Letters you already guessed" to div in html with id = lettersGuessed-Header.
		$("#lettersGuessed-Header").html("<p>Letters you already guessed</p>");
		//Write guessed letter to div in html with id = lettersGuessed.
		$("#lettersGuessed").html(lettersNotInWordList);
	}

	//Need to figure out if the guessed letter is in the random word that was generated...
	for (var i = 0; i < numberUnderscoresNeeded; i++){
		//If letter that the user guessed was found in the random word....
    	if (userGuess === lettersInWord[i]) {
    	//if (lettersInWord[i] > -1) {
        alert("letter found");
        var isletterInWord = true;
		underscoresSuccesses[i] = userGuess;
		console.log(underscoresSuccesses[i]);
		console.log(lettersInWord[i]);
		//document.getElementById("underscore").innerHTML = underscoresSuccesses.join("");
		}

		//Else, if letter that the user guessed was not found in the random word...
		//Note that we have already added the guessed word to the lettersNotInWordList.
		//if (randomWord.indexOf(userGuess) === -1 && alphabet.indexOf(userGuess) > -1 && userGuess != lettersInWord[i]) {
		//else if (lettersNotInWordList.indexOf(userGuess) === -1) {
		else if (lettersInWord[i] == -1){
			isletterinWord = false;
			}
	}

	//If the letter is in the word, let's check where in the word the letter exists, and then populate the underscoresSuccesses array in our HTML.
	if (isletterInWord) {
		 for (var i = 0; i < numberUnderscoresNeeded; i++) {
			if (lettersInWord[i] == userGuess) {
				underscoresSuccesses[i] = userGuess;
				console.log(underscoresSuccesses);
				document.getElementById("underscore").innerHTML = underscoresSuccesses.join("");
			}
		}
	}

	else {
		//If guessed letter was not found in random word and does not fall into the "Letters you already guessed" category, subtract 1 guess from remaining guesses.
		guessesRemainder--;
		console.log(guessesRemainder);
		//Update the number of guesses remaining in div in html with id = guessesLeft-Header.
		$("#guessesLeft-Header").html("<p>Number of guesses remaining</p>");
		//Write number of guesses to div in html with id = guessesLeft.
		$("#guessesLeft").html(guessesRemainder);
		//document.getElementById("LettersGuessed").innerHTML = lettersNotInWord.join(" ");
		//document.getElementById("guessesLeft").innerHTML = guessesRemainder;
		//console.log(guessesRemainder);
	}


	//If the letters in the lettersInWord array are the same as the letters in the underscoreSuccesses array, round is complete.
	//Then, execute roundComplete() function.
	if (lettersInWord.toString() == underscoresSuccesses.toString()) {
		roundComplete();
	}

	else if (guessesRemainder == 0) {
		roundComplete();
	}
}	


function roundComplete() {
	//log the wins, losses, and remaining guesses counts to the console.
	console.log("Win Count: " + wins + " | loss Count: "+ losses + " | Guesses Left: " + guessesRemainder);

	//I need to update the HTML with guesses remaining, underscores and successes, and letters already guessed.
	//document.getElementById("guessesLeft").innerHTML = guessesRemainder;
	//document.getElementById("underscore").innerHTML = underscoresSuccesses.join("");
	//document.getElementById("lettersGuessed").innerHTML = lettersNotInWord.join("");
	//document.getElementById("lettersGuessed").innerHTML = lettersNotInWord.join;
	//console.log(lettersNotInWord.join);

	//I want to check if the user won. If the user won, the letters in the lettersInWord array are the same as the letters in the underscoreSuccessarray.
	//Convert the letters in both arrays to compare.
	if (lettersInWord.toString() == underscoresSuccesses.toString()) {
		wins++;
		alert("You won");


		//Add to the number of wins in the HTML.
		document.getElementById("wins").innerHTML = wins;

		//Ask the user if they want to play the game. If user clicks OK, reset game and choose new word.
		//If user clicks Cancel, go back to main home screen.
		var playAgain = confirm('Do you want to play again?');
		if (playAgain) {
			start();
		}

		else {
			location.href = "home.html";
		}
	}

	//Check if user lost
	else if (guessesRemainder === 0){
		losses++;
		alert("You lost");

		//Add to the number of losses in the HTML.
		document.getElementById("losses").innerHTML = losses;

		//Ask the user if they want to play the game again. If user clicks OK, reset game and choose new word.
		//If user clicks Cancel, go back to main home screen.
		var playAgain = confirm('Do you want to play again?');
		if (playAgain) {
			start();
		}
	}
}

//Process - Execute the code. Do not place anything else below this line.
//===================================================================

//Starts/resets the code/game
start();

//check/compare the letter that the user guessed to the letters in the word.
//If the letter is in the word, populate the letter in the HTML.
checkLetters (userGuess);

//Determine if user won or loss. 
//Update wins or losses counter.
//Reset game.
roundComplete();
