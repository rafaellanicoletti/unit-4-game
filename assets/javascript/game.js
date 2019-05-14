
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
   var parisPic = picNumbers();
   var bcnPic = picNumbers();
   var nicePic = picNumbers();
   var cphPic = picNumbers();

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



function start(){
    // generate random number
    //intialize all shoe values
    shoeval1 = picNumbers();
    shoeval2 = Math.floor(Math.random() * 12) + 1;
    shoeval3 = Math.floor(Math.random() * 12) + 1;
    shoeval4 = Math.floor(Math.random() * 12) + 1;
    

    $("#totalNumber").text("0")
    guesses = 0;

    $("#randomNumber").text(randomNumber)
}











// Variables
// parisPic = 0
// bcnPic = 0
// cphPic = 0
// nicePic = 0
// targetNum = 0
// wins = 0
// lost = 0


// function start(){
//    // generate random number
//    //intialize all shoe values
//    //shoeVal1 = Math.floor(Math.random()*101) +19
//    $("#totalNumber").text("0")
// }

// function start(){
// var randomNum = Math.floor(Math.random()*101)+19;

// }


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


