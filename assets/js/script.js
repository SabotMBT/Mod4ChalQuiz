// global variables
var hsName = "";
var scoreNum = 0;
var quesBox = $(".card-container");
var x = -1;
var count = Math.max(0, 30);
var startBtn = $(".start-button");
var questionTracker = [0, 1, 2, 3, 4];
// question array
const questionArray = [
  "What is the air flight speed of an unladen swallow?",
  "Finish the following phrase: Silly English ______",
  "____ shall be the number thou shalt count, and the number of the counting shall be ____.",
  "If wood floats in water, what also floats in water?",
  "We are the Knights who say ____",
];
const choicesArray = [];
choicesArray[0] = new Array("117mph", "290kts", "330km/h", "Do you mean an African or a Euopean Swallow?");
choicesArray[1] = new Array("Bulldogs", "Knnnniggits!", "Boufsteck", "Goddens");
choicesArray[2] = new Array("Three", "Five", "Two", "Seven");
choicesArray[3] = new Array("Bread", "Apples", "A Witch!", "Very small rocks");
choicesArray[4] = new Array("Nu", "Ni!", "Shrubbery", "Ekki-ekki-ekki-p'tang-zoom!");
var answers = ["Do you mean an African or a Euopean Swallow?", "Knnnniggits!", "Three", "A Witch!", "Ni!"];
console.log(questionArray);
// question selector
function questionSelector() {
  x++;
  if (questionTracker.includes(x)) {
    console.log(x);
    questionDisplay();
  } else {
    gameOver();
  }
}
// question display
function questionDisplay() {
  quesBox.empty();
  var ask = $("<div>");
  ask.addClass(
    "card w-25 bg-dark custom-size text-wrap text-light text-center rounded"
  );
  console.log(x);
  console.log(questionArray[x]);
  ask.text(questionArray[x]);
  quesBox.append(ask);
  var list = $("<ul>");
  list.addClass("list-group list-group-flush");
  ask.append(list);
  for (i = 0; i < choicesArray[x].length; ++i) {
    var choicelist = $("<li>");
    choicelist.addClass(
      "list-group-item w-100 text-dark d-inline-flex justify-content-center"
    );
    list.append(choicelist);
    var choicebutton = $("<button>");
    choicebutton.addClass("choiceBtn btn btn-danger btn-small w-50");
    choicebutton.text(choicesArray[x][i]);
    choicelist.append(choicebutton);
  }
}
// check if correct answer
function checkAnswer() {
  console.log($(this).text());
  if ($(this).text() === answers[x]) {
    alert("Correct!");
    count += 5;
  } else {
    alert("Incorrect!");
    count -= 10;
  }
  quesBox.empty();
  questionSelector();
}
// start game button
function startButton() {
  runGame();
}
// timer
function timer() {
  count--;
  $("div.t-contain").text("Time Remaining: " + count + " seconds.");
  if (count <= 0) {
    count = 1;
    return;
  }
}
//high score
function gameOver() {
  scoreNum = count;
  quesBox.empty();
  var endBox = $("<div>");
  endBox.addClass(
    "d-flex flex-column w-25 bg-dark justify-content-center align-items-center rounded"
  );
  quesBox.append(endBox);
  var gameEnd = $("<p>");
  gameEnd.addClass("custom-size w-100 text-light text-center m-auto");
  endBox.append(gameEnd);
  gameEnd.text("Game Over!");
  var hsInput = $("<input>");
  hsInput.addClass("p-3 w-100 m-auto rounded");
  hsInput.attr("id", "hsInput");
  endBox.append(hsInput);
  var hsBtn = $("<button>");
  hsBtn.text("Enter your name to save your score!");
  hsBtn.addClass(
    "hsBtn text-center btn btn-danger btn-small w-50 justify-content-center m-auto"
  );
  endBox.append(hsBtn);
}
// high score
function highScore() {
  var hsName = $('input[id="hsInput"]').val();
  localStorage.setItem("Name", hsName);
  localStorage.setItem("Score", scoreNum);
}
$("div.hs-contain").text(
  localStorage.getItem("Name") + ": " + localStorage.getItem("Score")
);

// event handlers
startBtn.on("click", startButton);
quesBox.delegate("button.choiceBtn", "click", checkAnswer);
quesBox.delegate("button.hsBtn", "click", highScore);

// run game function
function runGame() {
  setInterval(timer, 1000);
  timer();
  questionSelector();
}
