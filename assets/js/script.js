// global variables
var quesBox = $(".card-container");
var x = 0;
var startBtn = $(".start-button");
// question array
const questionArray = [
  "Question1",
  "Question2",
  "Question3",
  "Question4",
  "Question5",
];
const choicesArray = [];
choicesArray[0] = new Array("A", "B", "C", "D");
choicesArray[1] = new Array("A", "B", "C", "D");
choicesArray[2] = new Array("A", "B", "C", "D");
choicesArray[3] = new Array("A", "B", "C", "D");
choicesArray[4] = new Array("A", "B", "C", "D");
var answers = ["D", "B", "A", "C", "B"];
console.log(questionArray);
// question selector
function questionSelector() {
  x = (Math.random() * questionArray.length) | 0;
  console.log(questionArray.length);
}
// question display
function questionDisplay() {
  quesBox.empty();
  var ask = $("<div>");
  ask.addClass("card");
  console.log(x);
  console.log(questionArray[x]);
  ask.text(questionArray[x]);
  quesBox.append(ask);
  var list = $("<ul>");
  list.addClass("list-group list-group-flush");
  ask.append(list);
  for (i = 0; i < choicesArray[x].length; ++i) {
    var choicelist = $("<li>");
    choicelist.addClass("list-group-item");
    list.append(choicelist);
    choicelist.text(choicesArray[x][i]);
    var choicebutton = $("<button>");
    choicebutton.addClass("choiceBtn btn btn-danger btn-small");
    choicelist.append(choicebutton);
  }
}
// check if correct answer
function checkAnswer() {
  console.log($(this).parent("li").text());
  if ($(this).parent("li").text() === answers[x]) {
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }
  quesBox.empty();
  questionSelector();
  questionDisplay();
}
// start game button
function startButton() {
  runGame();
}
// timer

//high score

// event handlers
startBtn.on("click", startButton);
quesBox.delegate("button.choiceBtn", "click", checkAnswer);

// run game function
function runGame() {
  questionSelector();
  questionDisplay();
}
