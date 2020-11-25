const start = document.getElementById('start-btn')
const next = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const text = document.getElementById("text")
const score = document.getElementById("score")
var scoreCurrent;
let a, currentQuestionIndex

start.addEventListener('click', startGame)
next.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    start.classList.add('hide')
    a = questions.sort(() => Math.random())
    currentQuestionIndex = 0
    scoreCurrent = 0
    printScore(scoreCurrent)
    questionContainer.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    ShuffledAnswer(currentQuestionIndex)
    showQuestion(a[currentQuestionIndex])

}

function printScore(scoreCurrent) {
    score.innerHTML = "Score:" + scoreCurrent;
}

function ShuffledAnswer(index) {
    questions[index].answers.sort(function() { Math.random() });
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.map((answer, key) => {
        const button = document.getElementsByClassName("btn")[key]
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)

    })

}

function resetState() {
    clearStatusClass(document.body)
    clearStatusClass(document.getElementsByClassName("btn")[0])
    clearStatusClass(document.getElementsByClassName("btn")[1])
    clearStatusClass(document.getElementsByClassName("btn")[2])
    clearStatusClass(document.getElementsByClassName("btn")[3])
    text.classList.add("hide")
    Array.from(answerButtons.children).forEach(button => {
            button.dataset.correct = ""
        }) //set dataset = 0 sau moi cau hoi moi
    next.classList.add('hide')
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClassBody(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClassButton(button, button.dataset.correct)
    })

    if (a.length > currentQuestionIndex + 1) {
        next.classList.remove('hide')
        if (correct) {
            text.classList.remove("hide")
            scoreCurrent++
            printScore(scoreCurrent)
        } else {
            text.classList.remove("hide")
            printScore(scoreCurrent)
        }
    } else {
        if (correct) {
            text.classList.remove("hide")
            scoreCurrent++
            printScore(scoreCurrent)
        } else {
            text.classList.remove("hide")
        }

        start.innerText = 'Restart'
        start.classList.remove('hide')
        start.classList.add('next-btn')
    }


}

function setStatusClassBody(element, correct) {
    clearStatusClass(element)

    if (correct) {
        element.classList.add('correct')

    } else {
        element.classList.add('wrong')
    };
}



function setStatusClassButton(element, correct) {
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