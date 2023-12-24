const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, correctQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    correctQuestionIndex++
    setnextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() =>Math.random() - 0.5)
    correctQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    setnextQuestion()
    quizScore = 0
}

function setnextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[correctQuestionIndex])
}


function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}


function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    setStatusClass(document.body.correct)
    Array.from(answerButtonElement.children).forEach((button) => { setStatusClass(button, button.dataset.correct) })
    if (shuffledQuestions.length > correctQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    }
    else {
        startButton.innerText = 'restart'
        startButton.classList.remove('hide')
    }

    if (selectedButton.dataset = correct) {
        quizScore++
    }

    document.getElementById('right-answer').innerText = quizScore

}



function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'which one of these is a JavaScript frameork?',
        answers: [
            { text: 'Python', correct: false },
            { text: 'Django', correct: false },
            { text: 'React', correct: true },
            { text: 'Eclipse', correct: false }
        ]
    },
    {
        question: 'Who is the PM of India?',
        answers: [
            { text: 'Keju', correct: false },
            { text: 'Rahul', correct: false },
            { text: 'Modi', correct: true },
            { text: 'Mamta', correct: false }
        ]
    },

    {
        question: 'What is 4+3?',
        answers: [
            { text: '10', correct: false },
            { text: '7', correct: true },
            { text: '13', correct: false },
            { text: '8', correct: false }
        ]
    }
]