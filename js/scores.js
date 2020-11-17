const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// display the list of scores from local Storage which is an array
highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} = ${score.score}</li>`;
  })
  .join("");