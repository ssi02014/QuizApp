const highScoreList = document.getElementById("highScoreList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//JSON.parse : JSON문자열을 -> JavaScript 값이나 객체를 생성

console.log(localStorage.getItem("highScores")); //JSON 문자열
console.log(highScores);

console.log( highScores.map(score => {
    return `<li class="high-score">${score.name}-${score.score}</li>`;
}).join(""));

highScoreList.innerHTML = highScores.map(score => {
        return `<li class="high-score">${score.name}-${score.score}</li>`;
    }).join("");