$(function(){
  var setSecond = 480;
  var time = setSecond;
  var timerID;
  var minutes;
  var seconds;

  function textDisplay(){
    seconds = time % 60;
    minutes = Math.floor(time / 60);
    $("#timer").text(minutes + ":" + seconds);
    $("#time-card").text(minutes);
  }

  function countDown(){
    time--;
    textDisplay();
  }

  function countStop(){
    clearInterval(timerID);
  }

  function timerStart(){
    countStop();
    timerID = setInterval(function(){
      if (time <= 0) {
        clearInterval();
      } else {
        countDown();
      }
    }, 1000);
  }

  textDisplay();

  $("#startBtn").click(function(){
    textDisplay();
    timerStart();
  });

  $("#stopBtn").click(function(){
    countStop();
  });

  $("#resetBtn").click(function(){
    countStop();
    time = setSecond;
    textDisplay();
  });
});