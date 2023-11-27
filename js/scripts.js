$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

// $(".clickable").click(function() {
//   $("#walrus-showing").fadeIn();
//   $("#walrus-hidden").fadeOut();
// });

// $(".clickable").click(function() {
//   $("#walrus-showing").fadeToggle();
//   $("#walrus-hidden").fadeToggle();
// });

// $(".clickable").click(function() {
//   $("#walrus-showing").slideDown();
//   $("#walrus-hidden").slideUp();
// });

// $(".clickable").click(function() {
//   $("#walrus-showing").slideToggle();
//   $("#walrus-hidden").slideToggle();
// });