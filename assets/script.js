var time = questions.length * 10;
var currentQuestionIndex = 0;
var timer;

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

function startQuiz() {
var startScreen = document.getElementById("start-screen");
startScreen.setAttribute("class", "hide");

questionsEl.removeAttribute('class');

timer = setInterval(clockTick, 1000)

timerEd.textContent = time;

getQuestion();
}

function getQuestion() {
var currentQuestion = questions[currentQuestionsIndex];
var titleEl = document.getElementById("question-title");
titleEl.textContent = currentQuestion.title;
choicesEl.textContent = "";
currentQuestion.choices.forEach(function(choice, i) {
var c = document.createElement("button");
//c.setAttribute('class', 'choice')
c.setAttribute('value', choice);
c.textContent = choice;
c.onclick = choiceClick;
choicesEl.append(c);
});
}

function quizEnd() {
clearInterval(timer);
var endEl = document.getElementById("end-screen")
endEl.removeAttribute("class")

var finalScoreEl = document.getElementById("final-score");
finalScoreEl.textContent = time;
}

function clockTick() {
time--;
timerEl.textContent = time;
if(time <= 0) {
quizEnd();
}
}


startBtn.onclick = startQuiz;
submitBtn.onclick = saveHighscore;