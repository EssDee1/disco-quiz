// Quiz Questions
const questions = [
    {
        "question": "Who is known as the 'Queen of Disco'?",
        "options": ["Gloria Gaynor", "Chaka Khan", "Diana Ross", "Donna Summer"],
        "answer": "Donna Summer"
      },
      {
        "question": "Which song by Gloria Gaynor became an anthem for survival and empowerment?",
        "options": ["Stayin' Alive", "Last Dance", "Hot Stuff", "I Will Survive"],
        "answer": "I Will Survive"
      },
      {
        "question": "Which band performed the iconic disco hit 'Stayin' Alive'?",
        "options": ["KC and the Sunshine Band", "ABBA", "Chic", "Bee Gees"],
        "answer": "Bee Gees"
      },
      {
        "question": "Which 1977 movie is credited with popularizing disco culture?",
        "options": ["Flashdance", "Saturday Night Fever", "Footloose", "Grease"],
        "answer": "Saturday Night Fever"
      },
      {
        "question": "What famous New York nightclub became synonymous with disco culture?",
        "options": ["Studio 54", "CBGB", "The Limelight", "The Tunnel"],
        "answer": "Studio 54"
      },
      {
        "question": "Which Chic song features the famous lyrics 'Ah, freak out!'?",
        "options": ["Good Times", "Everybody Dance", "Le Freak", "Dance, Dance, Dance"],
        "answer": "Le Freak"
      },
      {
        "question": "Who was the lead singer of the group Chic?",
        "options": ["Sister Sledge", "Tony Thompson", "Bernard Edwards", "Nile Rodgers"],
        "answer": "Nile Rodgers"
      },
      {
        "question": "Which song was a massive hit for KC and the Sunshine Band in 1975?",
        "options": ["Funky Town", "That's the Way (I Like It)", "Get Down Tonight", "Boogie Shoes"],
        "answer": "Get Down Tonight"
      },
      {
        "question": "Which famous disco hit by The Trammps is considered an anthem of the disco era?",
        "options": ["Don't Leave Me This Way", "Le Freak", "Disco Inferno", "Hot Stuff"],
        "answer": "Disco Inferno"
      },
      {
        "question": "Which Swedish band had several hits during the disco era, including 'Dancing Queen'?",
        "options": ["ABBA", "Chic", "Bee Gees", "Boney M."],
        "answer": "ABBA"
      },
      {
        "question": "What was the name of Donna Summer's 1977 hit single that became one of the best-selling disco tracks of all time?",
        "options": ["Bad Girls", "Hot Stuff", "I Feel Love", "Last Dance"],
        "answer": "I Feel Love"
      },
      {
        "question": "What year is often cited as the 'death of disco' due to the famous Disco Demolition Night event?",
        "options": ["1981", "1980", "1979", "1982"],
        "answer": "1979"
      },
      {
        "question": "Which disco song by Earth, Wind & Fire became a hit in 1978?",
        "options": ["Let's Groove", "Boogie Wonderland", "September", "Shining Star"],
        "answer": "September"
      },
      {
        "question": "Which disco group is known for the hit song 'Y.M.C.A.'?",
        "options": ["Chic", "Village People", "KC and the Sunshine Band", "Bee Gees"],
        "answer": "Village People"
      },
      {
        "question": "Which Sister Sledge song became a disco anthem of unity and pride in 1979?",
        "options": ["We Are Family", "Lost in Music", "Greatest Love", "He's the Greatest Dancer"],
        "answer": "We Are Family"
      },
      {
        "question": "Which Boney M. song, released in 1978, became a disco hit across Europe?",
        "options": ["Sunny", "Ma Baker", "Rasputin", "Daddy Cool"],
        "answer": "Rasputin"
      },
      {
        "question": "Which Bee Gees song features the lyrics 'You should be dancing, yeah!'?",
        "options": ["Jive Talkin'", "You Should Be Dancing", "Night Fever", "Stayin' Alive"],
        "answer": "You Should Be Dancing"
      },
      {
        "question": "Which 1976 Silver Convention song is considered a classic example of Euro disco?",
        "options": ["Lady Bump", "Fly, Robin, Fly", "Get Up and Boogie", "Love in C Minor"],
        "answer": "Fly, Robin, Fly"
      },
      {
        "question": "Which disco duo sang the 1979 hit 'Ring My Bell'?",
        "options": ["Anita Ward", "Amii Stewart", "Andrea True Connection", "A Taste of Honey"],
        "answer": "Anita Ward"
      },
      {
        "question": "Which popular 1979 disco song by Sister Sledge was produced by Nile Rodgers?",
        "options": ["We Are Family", "Lost in Music", "Thinking of You", "He's the Greatest Dancer"],
        "answer": "He's the Greatest Dancer"
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
