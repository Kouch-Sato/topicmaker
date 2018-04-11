$(function(){
  var array1 = ["water", "life", "dream", "fire", "love", 
  "marrige", "death", "dark", "glass", "coffee", "dog", "innovation",
  "TV"];

  var array2 = ["refugee", "tax increase"];
  
  var array3 = ["If you are president of America.", 
  "If you have 1 million yen, what would you do?"];

  var array4 = ["aaaaa"];

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