var buttonColours=["red", "blue", "green", "yellow"];
var level=0;
var start=false;
var gamePattern=[];
var userClickedPattern=[];
$(document).keypress(function(){
    if(!start){
        $("h1").text("Level "+level);
        nextSequence();
        start=true;

    }
    
});
//var randomChosenColour=

$(".btn").on("click", function handler(){
    var userChosenColour=$(this). attr("id");
    userClickedPattern.push(userChosenColour);
    //console.log(userClickedPattern);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
      } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
      }

}
function playSound(name){
    
    var ad=new Audio("sounds/"+name+".mp3");
    ad.play();
    

}
function animatePress(currentcolor){
    $("#"+currentcolor).addClass("pressed");
    setTimeout (function (){
        $("#"+currentcolor).removeClass("pressed");

    },100);
}

function nextSequence(){
    userClickedPattern = [];
    level++;
    
    $("h1").text("Level "+level);
    var randomnum=Math.floor(Math.random() * 4);
    var randomChosenColour=buttonColours[randomnum];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // var ad=new Audio("sounds/"+gamePattern[randomChosenColour]+".mp3");
    // ad.play();
    playSound(randomChosenColour);
}
function startOver() {
    level = 0;
    gamePattern = [];
    start = false;
  }
  





// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       startOver();
//     }
// }


// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }
