
// Option 1 Game design notes
// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.


// create variables
var targetNum = 0;
var wins = 0;
var losses = 0;
var guesses = 0;
var parisPic = 0;
var bcnPic = 0;
var nicePic = 0;
var cphPic = 0;

$("#number-to-guess").text(targetNum);
// var counter = 0;


// generate random number (target)

targetNum = Math.floor(Math.random() * 101) + 19;


// generate random number for images

function picNumbers (){
  return Math.floor(Math.random() * 12) +1;
};


// value of button clicked/ start game

function start (){
   parisPic = picNumbers();
   bcnPic = picNumbers();
   nicePic = picNumbers();
   cphPic = picNumbers();

   $("#totalNumber").text("0")
    guesses = 0;

    $("#targetNumber").text(targetNum);

}

// when clicked update the score

$("#button1").on("click", function(){
   guesses = guesses + parisPic;
   $("#totalNumber").text(guesses);

   play()
})

$("#button2").on("click", function(){
   guesses = guesses + bcnPic;
   $("#totalNumber").text(guesses);

   play();
})

$("#button3").on("click", function(){
   guesses = guesses + nicePic;
   $("#totalNumber").text(guesses);

   play()
})

$("#button4").on("click", function(){
   guesses = guesses + cphPic;
   $("#totalNumber").text(guesses);

   play()
})



// wins when  target num is met
// lost if goes + than target num
// show num of games played

function play() {
   if (guesses === targetNum) {
      wins++;
      alert("You win!!!!");
      start()
      $("#wins").text("Wins: " + wins);
   } 
   else (guesses > targetNum) 
      losses++;
      alert("You lost!");
      start()
      $("#losses").text("Losses: " + losses)
      
}


// win/lose game restarts
// when restarted a new random num generates, scores back to zero.

start();

