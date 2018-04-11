$(function(){
  $("#btn1").click(function(){
    var n = Math.floor(Math.random() * array1.length);
    $("#result1").text(array1[n]);
  });

  $("#btn2").click(function(){
    var n = Math.floor(Math.random() * array2.length);
    $("#result2").text(array2[n]);
  });

  $("#btn3").click(function(){
    var n = Math.floor(Math.random() * array3.length);
    $("#result3").text(array3[n]);
  });

  $("#btn4").click(function(){
    var n = Math.floor(Math.random() * array4.length);
    $("#result4").text(array4[n]);
  });
  
});