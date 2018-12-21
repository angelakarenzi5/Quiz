var count = 0;
function check(
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
  questionSeven,
  questionEight,
  questionNine,
  questionNine,
  questionTen
) {
  if (questionOne == "2") {
    count += 2;
  }
  if (questionTwo == "1") {
    count += 2;
  }
  if (questionThree == "3") {
    count += 2;
  }
  if (questionFour == "1") {
    count += 2;
  }
  if (questionFive == "2") {
    count += 2;
  }
  if (questionSix == "2") {
    count += 2;
  }
  if (questionSeven == "4") {
    count += 2;
  }
  if (questionEight == "4") {
    count += 2;
  }
  if (questionNine == "1") {
    count += 2;
  }
  if (questionTen == "3") {
    count += 2;
  }
  return count;
}
$(document).ready(function() {
  $("#myform form").submit(function() {
    event.preventDefault();
    var Question1 = $("input[type='radio'][name='questOne']:checked").val();
    var Question2 = $("input[type='radio'][name='questTwo']:checked").val();
    var Question3 = $("input[type='radio'][name='questThree']:checked").val();
    var Question4 = $("input[type='radio'][name='questFour']:checked").val();
    var Question5 = $("input[type='radio'][name='questFive']:checked").val();
    var Question6 = $("input[type='radio'][name='questSix']:checked").val();
    var Question7 = $("input[type='radio'][name='questSeven']:checked").val();
    var Question8 = $("input[type='radio'][name='questEight']:checked").val();
    var Question9 = $("input[type='radio'][name='questNine']:checked").val();
    var Question10 = $("input[type='radio'][name='questTen']:checked").val();

    // console.log(Question1)

    $("#button").hide();
    $("#quiz").hide();
    $("#numbers").text(
      "You got " +
        check(
          Question1,
          Question2,
          Question3,
          Question4,
          Question5,
          Question6,
          Question7,
          Question8,
          Question9,
          Question10
        ) +
        "%."
    );
  });
});
