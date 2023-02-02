var getScore = JSON.parse(localStorage.getItem('highScoreData'));
var highScoresArea = document.querySelector("#highScoresList");

var backBtn = document.querySelector("#backButton");
var clearBtn = document.querySelector("#clearScores");


function displayScores() {
    if (getScore !== null) {
        var scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        for (var i = 0; i < getScore.length; i++) {
            var initials = getScore[i].initials;
            var scores = getScore[i].userScore;
            var scoreEntry = document.createElement("li");
            scoreEntry.innerHTML = initials + " - " + scores;
            scoreList.appendChild(scoreEntry);
        }
        highScoresArea.appendChild(scoreList);
    }
};

displayScores();

backBtn.addEventListener("click", function () {
    location.href = "index.html";
});

clearBtn.addEventListener("click", function () {
    highScoresArea.innerHTML = "";
    window.localStorage.clear();

});