const quizData = [
    {
        question: "What does CLI stand for?" , 
        a: "Command Log Interface",
        b: "Commit List Interval",
        c: "Command Line Interface",
        d: "Control Log Internet",
        correct: "c"
    } ,
    {
        question: "What does URL stand for?" , 
        a: "Unified Resource Locator" ,
        b: "Unison Resource Locator",
        c: "Uniform Resource Lodge",
        d: "Uniform Resource Locator",
        correct: "d"
    } ,
    {
        question: "What does HTTP stand for?" , 
        a: "Hyperlink Task Temp Pool",
        b: "Hypertext Transfer Policy",
        c: "Hypertext Transfer Protocol",
        d: "Hyper Tool Text Protocol",
        correct: "c"
    } ,
    {
        question: "What does CSS stand for?" , 
        a: "Cascading Style Sheets",
        b: "Cascading Sheet Simplified",
        c: "Collector Style Sheet",
        d: "Cascading Sample Sheet",
        correct: "a"
    } ,
    {
        question: "What does HTML stand for" , 
        a: "Hot Tub Mine Lagoon",
        b: "Hyper Tool Markup Language",
        c: "Hollow Text Manager Language",
        d: "Hyper Text Markup Language",
        correct: "d"
    } ,
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
    if(answer === quizData[currentQuiz].correct) {
        score++
    }

    currentQuiz++

    if (currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        
        <button onclick="location.reload()">Reload</button>
        `
     }
    }
})


