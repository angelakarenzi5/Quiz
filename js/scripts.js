var count = 0;
function check() {
  var questOne = document.quiz.questOne.value;
  var questTwo = document.quiz.questTwo.value;
  var questThree = document.quiz.questThree.value;
  var questFour = document.quiz.questFour.value;
  var questFive = document.quiz.questFive.value;
  var questSix = document.quiz.questSix.value;
  var questSeven = document.getElementById("questSeven").value;
  var questEight = document.getElementById("questEight").value;
  var questNine = document.getElementById("questNine").value;
  var questTen = document.getElementById("questTen").value;

  if (questOne == "B") {
    count += 2;
  }
  if (questTwo == "A") {
    count += 2;
  }
  if (questThree == "C") {
    count += 2;
  }
  if (questFour == "A") {
    count += 2;
  }
  if (questFive == "B") {
    count += 2;
  }
  if (questSix == "B") {
    count += 2;
  }
  if (questSeven == "D") {
    count += 2;
  }
  if (questEight == "D") {
    count += 2;
  }
  if (questNine == "A") {
    count += 2;
  }
  if (questTen == "C") {
    count += 2;
  }
  return count;
}
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#numbers").text("You got" + count + "/20");
    $("#quiz").hide();
    $("#numbers").show();
  });
});
