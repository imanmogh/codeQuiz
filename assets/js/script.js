var instructionsElement = document.getElementById("instructions");
var startButton = document.getElementById("start-btn");

var questionsContainerElement = document.getElementById('question-container');
var questionsElement = document.getElementById('questions');
var answerBtn = document.getElementById('answer-btns')


var btn1 = document.getElementById('btn-1');
var btn2 = document.getElementById('btn-2');
var btn3 = document.getElementById('btn-3');
var btn4 = document.getElementById('btn-4');


var question1 = {
    question: "Commonly used data types DO Not include: ",
    answers: [
        { text: "strings", isCorrect: false},
        { text: "booleans", isCorrect: false},
        { text: "alerts", isCorrect: true},
        { text: "numbers", isCorrect: false}
    ]
}


function startGame() {
    instructionsElement.classList.add('hide')
    questionsContainerElement.classList.remove('hide');
    showQuestion();

}

function showQuestion() {
    questionsElement.innerHTML = question1.question;

  

    btn1.innerHTML = question1.answers[0].text;
    btn2.innerHTML = question1.answers[1].text;
    btn3.innerHTML = question1.answers[2].text;
    btn4.innerHTML = question1.answers[3].text;
}



startButton.addEventListener("click", startGame)

answerBtn.addEventListener('click', function(event) {

    event.preventDefault();
    
    if(question1.answers.isCorrect) {
        console.log("Correct");
    }
    else {
        return console.log("Wrong");
    }
})