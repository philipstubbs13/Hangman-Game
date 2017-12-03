//1. Have output for user instructions.
//<p>Press any key to start playing!</p> 

// 2. Problem: How to get user input?
// 2. Solution: Get User Input. Get user input using keypress. 
//Store info in variable for later use.

var wins = 0,
	losses = 0,
	guesses = 13;

//This function is run whenever the user presses a key.

document.onkeyup
document.onkeyup = function(event) {
	//Determins wich key was pressed.
	var userGuess = event.key;

	// 3. Problem: Get the word from computer.
	// 3. Solution: Create an array that lists out all of the options 
	//(Warriors, Wolves, Celtics). Randomly choose a choice from this array

	var options = ["warriors" , "wolves" , "celtics"];

	//Randomly chooses a choice from the options array. This is the word the user will try to guess.
	var randomWord = options[Math.floor(Math.random() * options.length)];
	alert(randomWord);

	// 4. Problem: Compare guesses against one another and determine result.
	// 4. Solution: Use conditional statements in order to determine the result.

	//This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number.
	// Run the following code only if randomWord is wolves.
	if (randomWord === "wolves") {

	// 5. Problem: Once the condition is met, do something with the result.
	// 5. Solution: Store the result in counter variables.
			if ((userGuess === "w") || (userGuess === "o") || (userGuess === 
				"l") || (userGuess === "v") ||(userGuess === "e") || (userGuess === "s")){
				guesses--;
			}

	//6. Problem: Display results to the browser
	//6. Solution: Create a variable to store a string, interspersed with data from results of game. Display the data using a query selector.

	}

	//Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/guesses.
	var html = 
		"<p>You chose: " + userGuess + "</p>" +
		"<p>wins: " + wins + "</p>" +
		"<p>losses: " + losses + "</p>" +
		"<p>guesses: " + guesses + "</p>";

		//Set the inner HTML contents of the #game div to our html string
		document.getElementById(#game).innerHTML = html;

}


	
	

//Create an array that lists out all of the options.






//Array of NBA teams. When the game starts, app will choose at random one of the team names listed here.
var options = ["warriors" , "wolves" , "celtics"];
	
	//# of times the user has guessed the word correctly
	var wins = 0;

	//# of times the user has guessed the word incorrectly
	var losses = 0;
	
	//# of guesses left. This will update.
	var guesses = 0;

	var answerArray = [];


//Use key events to listen for the letters that your players will type.
document.onkeyup = function() {
	//App randomly picks a word.
	var randomWord = options[Math.floor(Math.random() * options.length)];
	alert(randomWord);

	function setUp() {
  		for (var i = 0; i < randomWord.length; i++) {
    	answerArray[i] = "_";
    	alert(answerArray[i]);
  }

	//User guesses letter
	var userguess = String.fromCharCode(event.keyCode).toLowerCase();
	alert(userguess);

	for (i=0; i<10; i++) {
		console.log[i];
	}

	if (randomWord == "wolves") {
		if (userguess == "w") {
			alert("correct");
		}

		if (userguess == "o") {
			alert("correct");
		}

		if (userguess == "l") {
			alert("correct");
		}

		if (userguess == "v") {
			alert("correct");
		}

		if (userguess == "e") {
			alert("correct");
		}

		if (userguess == "s") {
			alert("correct");
		}
	
	}
}

}

