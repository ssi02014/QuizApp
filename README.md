# 💻 Quiz App
### HTML, CSS, Vanila JavaScript로 만들어본 Quiz App
### ⭐ Github Page: https://ssi02014.github.io/QuizApp/
<br />

## 🔖 Skill Stack
- HTML
- CSS
- JavaScript

<br />

## 👨🏻‍💻 game.js
### 🏃 fecth
- fetch를 통한 json 파일 읽어오기

<br />

```js
  fetch("question.json")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((loadedQuestion) => {
      questions = loadedQuestion;
      startGame();
    })
    .catch((err) => {
      console.error(err);
    });
```

<br />

### 🏃 question.json

```
[
  {
      "question": "전민재의 생일은 몇월?",
      "choice1": "3월",
      "choice2": "6월",
      "choice3": "9월",
      "choice4": "12월",
      "answer": 3
  },
]
```

### 🏃 문제 정답, 오답 체크

```js
```


👨🏻‍💻 
📈
🔍
❗
✅