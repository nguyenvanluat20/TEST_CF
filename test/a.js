const start = document.getElementById('start-btn')
const next = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer')
let a, currentQuestionIndex
start.addEventListener('click', startGame)
next.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

function startGame() {
    start.classList.add('hide')
    a = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    resetState()
    showQuestion(a[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    next.classList.add('hide')
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (a.length > currentQuestionIndex + 1) {
        next.classList.remove('hide')
    } else {
        start.innerText = 'Restart'
        start.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
        question: 'Which driver has been the Formula 1 world champion for a record 7 times?',
        answers: [
            { text: 'Michael Schumacher', correct: true },
            { text: 'Ayrton Senna', correct: false },
            { text: 'Fernando Alonso', correct: false },
            { text: 'Jim Clark', correct: false }
        ]
    },
    {
        question: 'How many points did LeBron James score in his first NBA game?',
        answers: [
            { text: '41', correct: false },
            { text: '19', correct: false },
            { text: '69', correct: false },
            { text: '25', correct: true }
        ]
    },
    {
        question: 'Which African American is in part responsible for integrating  Major League baseball?',
        answers: [
            { text: 'Roy Campanella', correct: false },
            { text: 'Jackie Robinson', correct: true },
            { text: 'Satchell Paige', correct: false },
            { text: 'Curt Flood', correct: false }
        ]
    },
    {
        question: 'The Los Angeles Dodgers were originally from what U.S. city?',
        answers: [
            { text: 'Las Vegas', correct: false },
            { text: 'Boston', correct: false },
            { text: 'Brooklyn', correct: true },
            { text: 'Seattle', correct: false }
        ]
    },
    {
        question: '&quot;Stadium of Light&quot; is the home stadium for which soccer team?',
        answers: [
            { text: 'Sunderland FC', correct: true },
            { text: 'Barcelona FC', correct: false },
            { text: 'Paris Saints-Germain', correct: false },
            { text: 'Manchester United', correct: false }
        ]
    }
]