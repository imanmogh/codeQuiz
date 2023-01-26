var timerElement = document.getElementById("timer");
var timer;
var timerCount = 75;

var instructionsElement = document.getElementById("instructions");
var startButton = document.getElementById("start-btn");

var questionsContainerElement = document.getElementById('question-container');
var questionsElement = document.getElementById('questions');
var answerContainer = document.getElementById('answer-btns')

var questionCount;

var submissionElement = document.getElementById('submission');


//Array variable to store question, answer, and correct objects
var questions = [
    {
        Question: "Commonly used data types DO NOT inclued: ",
        Answers:["strings","booleans","alerts","numbers"],
        Correct: "alerts"
    },
    {
        Question: "The condidition in an if/else is enclosed with _ ",
        Answers:["quotes","curly brackets","parenthesis","square brackets"],
        Correct: "curly brackets"
    },
    {
        Question: "Arrays in Javascript can be used to store _ ",
        Answers:["numbers and strings","other arrays","booleans","all of the above"],
        Correct: "all of the above"
    },
    {
        Question: "String values must be enclose within _ when being assigned to variables: ",
        Answers:["commas","curly brackets","quotes","parenthesis"],
        Correct: "quotes"
    },
    {
        Question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        Answers:["Javascript","terminal/bash","for loops","console.log"],
        Correct: "console.log"
    },
]

function startGame() {
    instructionsElement.classList.add('hide')
    questionsContainerElement.classList.remove('hide');
    showQuestion();
    startTimer();
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
      }
    }, 1000);
  }

function showQuestion() {
    //Displaying the first  question
    questionCount = 0;
    questionsElement.innerHTML = questions[questionCount].Question;

    for (var i = 0; i < questions[questionCount].Answers.length; i++) {
       let btn = document.createElement("button");
        btn.innerHTML = questions[questionCount].Answers[i];
        btn.classList.add("btn");
        answerContainer.appendChild(btn);
    }
}

function nextQuestion() {
    //Displaying the next question
    answerContainer.innerHTML = "";
    questionCount++;

    questionsElement.innerHTML = questions[questionCount].Question;

    for (var i = 0; i < questions[questionCount].Answers.length; i++) {
       let btn = document.createElement("button");
        btn.innerHTML = questions[questionCount].Answers[i];
        btn.classList.add("btn");
        answerContainer.appendChild(btn);
    }
}

function highScore() {
    localStorage

}


startButton.addEventListener("click", startGame)

answerContainer.addEventListener('click', function(event) {
    console.log(event);
    
    if(event.target.textContent == questions[questionCount].Correct) {
        console.log("Correct");
        nextQuestion();
    }
    else {
        console.log("Wrong");
        //Timer deduction function
        timerCount = timerCount - 10;
        nextQuestion();
    }
})
