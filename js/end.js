const username = document.querySelector("#username");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const MAX_HIGH_SCORES = 5;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

finalScore.innerHTML = mostRecentScore;
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  console.log("click! the save button");
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score); //배열의 뒤에다 요소 추가
  highScores.sort((a, b) => b.score - a.score); //내림차순, a-b면 오름차순
  highScores.splice(5); //5번 인덱스를 포함해서 이후의 모든 요소 제거

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("./highScore.html");
};
