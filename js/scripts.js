function check() {
  var questOne = document.getElementById("questOne").value;
  var questTwo = document.getElementById("questTwo").value;
  var questThree = document.getElementById("questThree").value;
  var questFour = document.getElementById("questFour").value;
  var questFive = document.getElementById("questFive").value;
  var questSix = document.getElementById("questSix").value;
  var questSeven = document.getElementById("questSeven").value;
  var questEight = document.getElementById("questEight").value;
  var questNine = document.getElementById("questNine").value;
  var questTen = document.getElementById("questTen").value;
  var count = 0;

  if (questOne == "B") {
    count += 1;
  }
  if (questTwo == "A") {
    count += 1;
  }
  if (questThree == "C") {
    count += 1;
  }
  if (questFour == "A") {
    count += 1;
  }
  if (questFive == "B") {
    count += 1;
  }
  if (questSix == "B") {
    count += 1;
  }
  if (questSeven == "D") {
    count += 1;
  }
  if (questEight == "D") {
    count += 1;
  }
  if (questNine == "A") {
    count += 1;
  }
  if (questTen == "C") {
    count += 1;
  }
  return count;
}
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#numbers").text("You got" + check() + "/20");
    $("#test").hide();
    $("#numbers").show();
  });
});
