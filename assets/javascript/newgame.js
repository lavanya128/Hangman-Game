$(document).ready(function()
   { 
// variables
var wordList = ['NOTEBOOK','GLASSES','PENCIL','HAND','PLANT','PAPER','WATCH','APPLE', 'GRAPES', 'ORANGE', 'BANANA'];
var hangmanWord = "";
var inputKey;
var missGuess = [];
var goodGuess = [];
var numGuess = 10;
var wins = 0;
var loss = 0;
var screenLookup = [];
var inputFound;
var audio = new Audio('assets/audio/applause-8.mp3');
var audio1 = new Audio('assets/audio/fail-trombone-03.mp3');

// select the word
function randomWord() {
//	console.log("here");
	hangmanWord= wordList[Math.floor(Math.random() * wordList.length)];
	console.log(hangmanWord);
};

// initialize for selecting characters
function initScreen() {
	screenLookup = [];
	numGuess = 10;
	for (var i = 0; i < hangmanWord.length; i++) {
		screenLookup[i] = "_"
	}
	missGuess = [];
	console.log(screenLookup);
	$("#computerChoice").empty();
	$("#computerChoice").append(screenLookup);
	console.log(missGuess);
	
};

// check the character selected
function charWord() {
	inputFound = false;
	for (var i = 0; i < hangmanWord.length; i++) {
	  if (inputKey	=== hangmanWord.charAt(i)) {
	  	screenLookup[i] = inputKey;
	  	inputFound = true;
	  }
	}
	if (inputFound === false) {
	  if (missGuess.indexOf(inputKey) === -1) {
	    missGuess.push(inputKey);
	    numGuess--;
	  }
	 }

	console.log(inputKey);
	console.log(screenLookup);
	$("#computerChoice").empty();
   $("#computerChoice").append(screenLookup);
	console.log(missGuess);
	console.log(numGuess);
	$("#guess").empty();
	$("#guess").append(numGuess);
};

// check for win or lose
function winLoseCheck() {
	if (numGuess === 0) {
		alert("You Lose!!!");
		loss++
		randomWord();
		initScreen();
	}
	else if (screenLookup.includes("_")) {
		wins ;
		//$("#audio").append(audio1.play());
	} else {
		//alert("You Win!!!");
		wins++;
		$("#word").empty();
   $("#word").append(screenLookup);
		$("#win").empty();
   $("#win").append(wins);
   $("#audio").append(audio.play());
		randomWord();
		initScreen();	
	}
	console.log(missGuess);
	$("#lettersGuessed").empty();
	$("#lettersGuessed").append(missGuess);
};


// start of the program
randomWord();
initScreen();

// get key
(document).onkeyup = function(event) {
	inputKey = String.fromCharCode(event.keyCode).toUpperCase();
	charWord();
	winLoseCheck();
};

});
