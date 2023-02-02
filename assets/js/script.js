//Variables ---------------------------------------------
var timerElement = document.getElementById("timer");
var timerCount = 75;

var instructionsElement = document.getElementById("instructions");
var startButton = document.getElementById("start-btn");

var questionsContainerElement = document.getElementById('question-container');
var questionsElement = document.getElementById('questions');
var answerContainer = document.getElementById('answer-btns')
var answerElement = document.getElementById('answer')

var questionCount;

var submissionElement = document.getElementById('submission');

var highscoreResults = document.getElementById('highscore-results');
var submitBtn = document.getElementById('submit-btn');
var scores = [];
var getScore = JSON.parse(localStorage.getItem('highScoreData'));


var resultContainer = document.getElementById('results');
initialsElement = document.getElementById('initials')



//Array variable to store question, answer, and correct objects ---------------------------------------------
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
    }
]


//Functions ---------------------------------------------

//Function to start the game
function startGame() {
    instructionsElement.classList.add('hide')
    questionsContainerElement.classList.remove('hide');
    showQuestion();
    startTimer();
}

//Function to start the timer
function startTimer() {
    // Sets timer
    timerCount;
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
      }
    }, 1000);
}



//Function  to show the first question
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

//Function  to show the next question
function nextQuestion() {
    //Displaying the next question
    // clear the answer area
    answerContainer.innerHTML = "";
  
    // increment you question count
    questionCount++;

    // ask if we are done w/ the questions
    if (questionCount > 4) {
        //stop timer
        clearTimeout(timer);
        // clear the question area
        questionsContainerElement.innerHTML = "";
        // show the result area
        resultContainer.classList.remove('hide');
        
    }
    // else do what we were doing
    else {
        questionsElement.innerHTML = questions[questionCount].Question;

        for (var i = 0; i < questions[questionCount].Answers.length; i++) {
        let btn = document.createElement("button");
            btn.innerHTML = questions[questionCount].Answers[i];
            btn.classList.add("btn");
            answerContainer.appendChild(btn);
        }
    }
}




//Function  to show users highscore
function highScore(x, y) {

    var highScoreData = {
        initials: x,
        userScore: y
    }

    scores.push(highScoreData);

    localStorage.setItem('highScoreData', JSON.stringify(scores));
    location.href = "highScore.html";
}

// Event Listeners ---------------------------------------------


startButton.addEventListener("click", startGame);

answerContainer.addEventListener('click', function(event) {
  
    if(event.target.textContent === questions[questionCount].Correct) {
        answerElement.textContent = "Correct";
        nextQuestion();
    }
    else {
        answerElement.textContent = "Wrong";
        //Timer deduction function
        timerCount = timerCount - 10;
        nextQuestion();
    }
})

submitBtn.addEventListener("click" , function(){
    let name = document.getElementById("initials").value
    highScore(name, timerCount)

});