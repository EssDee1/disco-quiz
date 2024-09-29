// Quiz Questions
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris",
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        answer: "Tokyo",
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;

// Load the current question
function loadQuestion() {
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options");
    const questionNumber = document.getElementById("question-number");

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Display question
    questionText.innerText = questions[currentQuestionIndex].question;
    questionNumber.innerText = currentQuestionIndex + 1;

    // Display options
    questions[currentQuestionIndex].options.forEach(option => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
        optionsContainer.appendChild(label);
    });
}

// Handle next question button click
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    const answer = selectedOption.value;
    const correctAnswer = questions[currentQuestionIndex].answer;

    // Show if the answer is correct or not
    if (answer === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect! The correct answer is: " + correctAnswer);
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz finished!");
        // Optionally, reset the quiz
        currentQuestionIndex = 0;
        loadQuestion();
    }
}

// Load the first question when the page loads
window.onload = loadQuestion;
