const questions = [
    {
        question: "Who is known as the 'King of Pop'?",
        options: ["Michael Jackson", "Elvis Presley", "Prince", "Justin Timberlake"],
        correct: 0
    },
    {
        question: "Which band wrote the hit song 'Bohemian Rhapsody'?",
        options: ["The Beatles", "Queen", "The Rolling Stones", "Led Zeppelin"],
        correct: 1
    },
    {
        question: "What year did The Beatles disband?",
        options: ["1970", "1965", "1980", "1969"],
        correct: 0
    },
    {
        question: "Who won the first season of 'American Idol'?",
        options: ["Kelly Clarkson", "Carrie Underwood", "Jennifer Hudson", "Adam Lambert"],
        correct: 0
    },
    {
        question: "Which of these artists is known for the song 'Uptown Funk'?",
        options: ["Bruno Mars", "Justin Bieber", "Pharrell Williams", "Ed Sheeran"],
        correct: 0
    },
    {
        question: "What was the best-selling album of all time?",
        options: ["Thriller by Michael Jackson", "Back in Black by AC/DC", "The Dark Side of the Moon by Pink Floyd", "The Wall by Pink Floyd"],
        correct: 0
    },
    {
        question: "Who is the 'Queen of Pop'?",
        options: ["Lady Gaga", "Madonna", "Britney Spears", "Beyoncé"],
        correct: 1
    },
    {
        question: "What is Taylor Swift's first album called?",
        options: ["Taylor Swift", "1989", "Red", "Fearless"],
        correct: 0
    },
    {
        question: "What genre is the band Nirvana associated with?",
        options: ["Grunge", "Metal", "Punk", "Indie Rock"],
        correct: 0
    },
    {
        question: "What is the stage name of the artist born as Robyn Fenty?",
        options: ["Rihanna", "Nicki Minaj", "Cardi B", "Beyoncé"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    const answersContainer = document.getElementById('answers-container');
    questionContainer.innerHTML = question.question;
    answersContainer.innerHTML = ''; // Clear previous answers

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        score++;
    }
    nextQuestion();  // Proceed to the next question after an answer is selected
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult(); // Show results after all questions are answered
    }
}

function showResult() {
    const resultContainer = document.getElementById('result');
    const quizContainer = document.getElementById('quiz-container');

    // Display the final score message
    resultContainer.textContent = `You completed the quiz! Here's your score: ${score}/${questions.length}`;

    // Show the result container and hide the quiz container
    resultContainer.style.display = 'block';
    quizContainer.style.display = 'none';
}

displayQuestion();  // Start the quiz when the page loads





