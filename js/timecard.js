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
    if (time == 0)
      $("#time-card").text("END");
    else if (time < 15)
      $("#time-card").text("0");
    else if (time < 30)
      $("#time-card").text("1/4");
    else if (time < 60)
      $("#time-card").text("1/2");
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

  $("#changeSecond").click(function(){
    setSecond = $("#setSecond").val() * 60;
    console.log(setSecond);
    countStop();
    time = setSecond;
    textDisplay();
  });
});