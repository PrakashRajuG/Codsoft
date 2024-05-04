const quizData = [
    {
        question: 'What is 1 + 1?',
        answers: [
            { text: '2', correct: true },
            { text: '3', correct: false },
            { text: '4', correct: false },
            { text: '5', correct: false }
        ]
    },
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Jupiter', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Saturn', correct: false },
            { text: 'Venus', correct: false }
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Pablo Picasso', correct: false },
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Michelangelo', correct: false }
        ]
    },
    {
        question: 'What is the largest mammal?',
        answers: [
            { text: 'Elephant', correct: false },
            { text: 'Blue whale', correct: true },
            { text: 'Giraffe', correct: false },
            { text: 'Hippopotamus', correct: false }
        ]
    },
    {
        question: 'Which country won the FIFA World Cup in 2018?',
        answers: [
            { text: 'Brazil', correct: false },
            { text: 'France', correct: true },
            { text: 'Germany', correct: false },
            { text: 'Argentina', correct: false }
        ]
    },
    {
        question: 'What is the tallest mountain in the world?',
        answers: [
            { text: 'Mount Everest', correct: true },
            { text: 'K2', correct: false },
            { text: 'Kangchenjunga', correct: false },
            { text: 'Lhotse', correct: false }
        ]
    },
    {
        question: 'Which is the largest ocean on Earth?',
        answers: [
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true }
        ]
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        answers: [
            { text: 'William Shakespeare', correct: true },
            { text: 'Charles Dickens', correct: false },
            { text: 'Jane Austen', correct: false },
            { text: 'Mark Twain', correct: false }
        ]
    },
    {
        question: 'Which is the largest continent by land area?',
        answers: [
            { text: 'Asia', correct: true },
            { text: 'Africa', correct: false },
            { text: 'North America', correct: false },
            { text: 'South America', correct: false }
        ]
    }
];
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const quizContainer = document.querySelector('.quiz-container');
const thankYouMessage = document.createElement('div');
thankYouMessage.classList.add('thank-you-message');
thankYouMessage.innerText = 'Thank you!';

let currentQuestionIndex = 0;

function startQuiz() {
    showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question, questionNumber) {
    questionContainer.innerHTML = '';
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerText = question.question;
    questionContainer.appendChild(questionElement);

    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion(quizData[currentQuestionIndex], currentQuestionIndex + 1);
}

function selectAnswer(correct) {
    if (correct) {
        // Handle correct answer
        alert('Correct!');
    } else {
        // Handle wrong answer
        alert('Wrong!');
    }
    showNextQuestion();
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
    } else {
        // Quiz ends
        quizContainer.innerHTML = '';
        quizContainer.appendChild(thankYouMessage);
    }
}

nextButton.addEventListener('click', showNextQuestion);

startQuiz(); 