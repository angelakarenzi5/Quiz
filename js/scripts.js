var answers = ["B", "A", "C", "A", "B", "B", "D", "D", "A", "C"],
  tot = answers.length;

function check() {
  var questOne = document.quiz.questOne.value;
  var questTwo = document.quiz.questTwo.value;
  var questThree = document.quiz.questThree.value;
  var questFour = document.quiz.questFour.value;
  var questFive = document.quiz.questFive.value;
  var questSix = document.quiz.questsix.value;
  var questSeven = document.quiz.questSeven.value;
  var questEight = document.quiz.questEight.value;
  var questNine = document.quiz.questNine.value;
  var questTen = document.quiz.questTen.value;
  var count = 0;

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

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("number_count").innerHTML = "You got " + count + "%.";

  $("#button").hide();
  $("#quiz").hide();
  $("#number_count").show();
  event.preventDefault();
}
