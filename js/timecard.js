$(function(){
  var setSecond = 640;
  var time = setSecond;
  var timerID;

  function textDisplay(){
    $("#countDown").text(time);
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