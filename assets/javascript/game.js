$(document).ready(function()
  {  
    var prevGuess=[];
    var nOfGuesses=13;
    var win=0;
    var computerChoice;
    var cChoiceLength;
    var userGuess;
    var searchChar;
    var placeHolder=[];
    var words = [
      'Hello',
      'No',
      'Hi',
      'Banana', 
      'Apple',
      'Sweet',
      'Grapes',
      'Orange'
    ];
    randomWord(words);
  function randomWord(words) {
    computerChoice=(words[Math.floor(Math.random() * words.length)]);
    computerChoice=computerChoice.toLowerCase();
//   for (var x = 0; x < 1; x++)
// {
//   console.log("Computer choice:" + randomWord(words));
//   //document.write(randomWord(words));
// }
    console.log(computerChoice);
    cChoiceLength="";
    cChoiceLength="-";
    console.log(cChoiceLength.repeat(computerChoice.length));
    placeHolder=[];
    for(var i=0; i<computerChoice.length;i++)
    {
      placeHolder.push(cChoiceLength);
    }
    console.log(placeHolder.length);
    $("#computerChoice").append(placeHolder);
    return(computerChoice=computerChoice.toLowerCase());
};
//displaying --- for corresponding word length.



document.onkeyup = function(event) 
{

  userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);
  prevGuess=[];
  if(userGuess!=prevGuess)
  {
    prevGuess.push(userGuess);
    console.log(prevGuess);
    $("#lettersGuessed").append(prevGuess);
  }
  else if(userGuess === prevGuess)
  {
    nOfGuesses;
  }


var audio = new Audio('assets/audio/applause-8.mp3');
var audio1 = new Audio('assets/audio/fail-trombone-03.mp3');
console.log(userGuess);
searchChar=computerChoice.search(userGuess);
console.log(searchChar);

    if(searchChar!=-1)
    {
      for (var i = 0; i < computerChoice.length; i++) 
      {

        if (userGuess === computerChoice[i])
          {
            placeHolder[i] = userGuess;
            
          }
        }
      nOfGuesses;
        $("#guess").empty();
        $("#guess").append(nOfGuesses);
        console.log(placeHolder);
        $("#computerChoice").empty();
        $("#computerChoice").append(placeHolder);
        console.log(nOfGuesses);

    }
    else if(searchChar === -1)
    {
      if(nOfGuesses===0)
      {
        $("#guess").empty();
        $("#computerChoice").empty();
        $("#lettersGuessed").empty();
        nOfGuesses=13;
        $("#guess").append(nOfGuesses);
        computerChoice;
        cChoiceLength;
        userGuess;
        searchChar;
        placeHolder=[];
        randomWord(words);
      }
      else
      {
        nOfGuesses--;
        console.log(nOfGuesses);
        $("#guess").empty();
        $("#guess").append(nOfGuesses);
        $("#audio").append(audio1.play());
      }
    }
  var strCat= placeHolder.join("");
  console.log(strCat);
  console.log(cChoiceLength);
  if(strCat.includes("-"))
  {
    console.log(win);
  }
  else
  {
    win++;
    console.log(win);
    $("#win").empty();
    $("#win").append(win);
    $("#word").empty();
    $("#word").append(strCat);
    $("#audio").append(audio.play());
    reset(win);
    randomWord(words);
}
};
  
function reset(win){
if(win  >= 1)
{
  //window.location.reload(true);
  $("#guess").empty();
  //$("#word").empty();
  $("#computerChoice").empty();
  $("#lettersGuessed").empty();
  nOfGuesses=13;
  $("#guess").append(nOfGuesses);
  computerChoice;
  cChoiceLength;
  userGuess;
  searchChar;
  placeHolder=[];
  randomWord(words);
}
};

});