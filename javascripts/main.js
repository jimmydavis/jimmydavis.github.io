$(document).ready(function() {

  $("#email").on("click", function(e) {
    e.preventDefault();
    $(".show-email").text("JamesMDavis5@gmail.com").fadeIn(1000);
  });

});



// $(document).ready(function() {
//   $('#about').on("click", aboutSection);
//   $('#code').on("click", codeSection);
//   $('#email').on("click", showEmail);
// });

// aboutSection = function() {
//   $('#info').text("About me");
// };

// codeSection = function() {
//   $('#info').text("Code");
// };

// showEmail = function() {
//   $('show-email').text("JamesMDavis5@gmail.com")
// };
