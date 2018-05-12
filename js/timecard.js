$(function(){
  var setSecond = 100;
  var time = setSecond;
  var setPause = setSecond;
  var timerID;

  function textDisplay(){
    $("#countDown").text(time);
  }

  function countDown(){
    time--;
    setPause = time;
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
    time = setPause;
    textDisplay();
    timerStart();
  });

  $("#stopBtn").click(function(){
    countStop();
  });

});