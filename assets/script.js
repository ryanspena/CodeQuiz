var questions = [
    {
        title: "Commonly used data types do NOT Include:" , 
        choices: ["strings" , "booleans" , "alerts" , "numbers"] ,
        answer: "b1"
    } ,

    {
        title: "Conditions in an if / else statement is enclosed with ______" , 
        choices: ["quotes" , "curly brackets" , "parenthesis" , "square brackets"] ,
        answer: "c2"
    } ,

    {
        title: "Arrays in Javascript can be used to store" , 
        choices: ["numbers and strings" , "other arrays" , "booleans" , "all of the above"] ,
        answer: "a3"
    } ,

    {
        title: "String values must be enclosed within ______ when being assigned to variables." , 
        choices: ["commas" , "curly brackets" , "quotes" , "parenthesis"] ,
        answer: "b1"
    } , 

    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:" , 
        choices: ["JavaScript" , "terminal/bash" , "for loops" , "console.log"] ,
        answer: "b1"
    }
]

var time = questions.length * 15;
var currentQuestionIndex = 0;
var timer;

var questionsEl = document.getElementById("crntQ");
var timerEl = document.getElementById("rTime");
var choicesEl = document.getElementById("answerC");
var submitBtn = document.getElementById("submitId");
var startBtn = document.getElementById("startB");
// var initialsEl = document.getElementById("initials");
// var feedbackEl = document.getElementById("rw");

function startQuiz() {
console.log("this function is triggered");
var startScreen = document.getElementById("startP");
startScreen.setAttribute("class", "hidden");

questionsEl.removeAttribute('class');

timer = setInterval(clockTick, 1000)

timerEl.textContent = time;

getQuestion();
}

function getQuestion() {
var currentQuestion = questions[currentQuestionIndex];
var titleEl = document.getElementById("qstn");
titleEl.textContent = currentQuestion.title;
choicesEl.textContent = "";
currentQuestion.choices.forEach(function(choice, i) {
var c = document.createElement("button");
// c.setAttribute('class', 'choice')
c.setAttribute('value', choice);
c.textContent = choice;
c.onclick = choiceClick;
choicesEl.append(c);
});
}

// function quizEnd() {
// clearInterval(timer);
// var endEl = document.getElementById("end-screen")
// endEl.removeAttribute("class")

// var finalScoreEl = document.getElementById("final-score");
// finalScoreEl.textContent = time;
// }

function clockTick() {
time--;
timerEl.textContent = time;
if(time <= 0) {
quizEnd();
}
}

function saveHighscore() {

}

function choiceClick() {

}

function showResults() {
    
}

startBtn.onclick = startQuiz;
submitBtn.onclick = saveHighscore;