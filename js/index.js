$(function(){
  $("#about-link").click(function(){
    $("html, body").animate({ scrollTop: $("#about").offset().top });
  });
  $("#mission-link").click(function(){
    $("html, body").animate({ scrollTop: $("#mission").offset().top });
  });
  $("#contact-link").click(function(){
    $("html, body").animate({ scrollTop: $("#contact").offset().top });
  });
});