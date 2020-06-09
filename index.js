var buttonColours = ["green", "red", "yellow", "blue"]
var start = false;
var level = 1;
$(document).keypress(function() {
  if (!start) {
    start = true;
    start_game();
  }
});
$(".btn").click(function() {
  if (start == true) {
    var num = Math.floor(Math.random() * 4);
    if (buttonColours[num] == $(this).attr("id")) {
      Attached_sound(this.id);
      start_game();
      $("#" + this.id ).fadeIn(100).fadeOut(100).fadeIn(100);

    } else {
      finished();
    }
  }
});

function start_game(name) {


if(level == 4) {
  win();
}else{
  $("#level-title").text("Level " + level);
  level++;
}
}

function finished() {
  $("body").addClass("game-over")
  $("game-over").text("Wrong");
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  setTimeout(function(){
    $("body").removeClass("game-over");
  },500)

  $("#level-title").text("Wrong Game Over for restart Press A key");
  start = false;
  level = 1;
}

function win() {
  $("#level-title").text("Welcome You Win The Game For restart again Press A key");
  start = false;
  level=1;
}

function Attached_sound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

/*

function nextSequence(){
  var num=Math.floor(Math.random()*4);
  var cor;
  $(".btn").click(function()
  {
    cor=$(this).attr("id");

  });
  if(cor==buttonColours[num])
  {
    level=level+1;
  }/*else{
    start=false;
    $("#level-title").text("Game over Press A key to Restart the game")

  }*/
/*
}
*/
