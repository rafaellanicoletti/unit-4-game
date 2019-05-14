
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

// when clikc update the score




// wins when  target num is met
// lost if goes + than target num
// win/lose game restarts
// when restarted a new random num generates, scores back to zero.
// show num of games played


function play() {
   if (guesses === randomNumber){
  wins += 1; 
       start()

       $("#wins").text(" Wins: " + wins) 
    

} else if (guesses > randomNumber){
  lost += 1;   
       start()
       $("#losses").text("Losses: " + lost) 

}

}













// $("#id1")

// $("#id1").on("click", function(){
//    guesses = guesses + shoeval1
//    $("#totalNumber").text(guesses)
// play()

// })
// $("#id2").on("click", function(){
//    guesses = guesses + shoeval3
// })
// $("#id3").on("click", function(){
//    guesses = guesses + shoeval3

// })


// play()
// if (guesses == randomNumber){
//     wins += 1;
// } else (guesses !== randomNumber){
//     lost += 1;
// }

// start()


