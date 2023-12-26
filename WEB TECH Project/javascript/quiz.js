const quizData = [
    {
        question: "How would you rate your overall satisfaction?",
        a: "Very Dissatisfied",
        b: "Dissatisfied",
        c: "Neutral",
        d: "Satisfied",
        e: "Very Satisfied",
    },
    {
        question: "Rate the quality of our products/services.",
        a: "Poor",
        b: "Fair",
        c: "Good",
        d: "Very Good",
        e: "Excellent",
    },
    {
        question: "How easy was it to use our website/app?",
        a: "Very Difficult",
        b: "Difficult",
        c: "Neutral",
        d: "Easy",
        e: "Very Easy",
    },
    {
        question: "How satisfied are you with our customer service?",
        a: "Very Dissatisfied",
        b: "Dissatisfied",
        c: "Neutral",
        d: "Satisfied",
        e: "Very Satisfied",
    },
    {
        question: "Rate the timeliness and accuracy of our delivery/shipping process.",
        a: "Very Dissatisfied",
        b: "Dissatisfied",
        c: "Neutral",
        d: "Satisfied",
        e: "Very Satisfied",
    },
    {
        question: "Do you feel you received good value for the price paid?",
        a: "Poor",
        b: "Fair",
        c: "Good",
        d: "Very Good",
        e: "Excellent",
    },
    {
        question: "How likely are you to recommend our products/services to others?",
        a: "Not at all likely",
        b: "Not very likely",
        c: "Neutral",
        d: "Likely",
        e: "Very Likely",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
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
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       }else{
        quiz.innerHTML = `
        <h2>Thank you for the answers</h2>
        <img src="image/gift.png">
        <button onclick="redirectToHomePage()">Home Page</button>
        `
       }
    }else {
        alert('Please select an answer before proceeding.');
    }
})

function redirectToHomePage() {
    window.location.href = 'index.html';
}