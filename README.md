# 💻 Quiz App
### HTML, CSS, Vanila JavaScript로 만들어본 Quiz App
### ⭐ Github Page: https://ssi02014.github.io/QuizApp/

<br />

## 🎥 App View
### 📺 index.html
![index](https://user-images.githubusercontent.com/64779472/117028488-b9170700-ad38-11eb-8d7d-4c7a613de4ec.PNG)

<br />

### 📺 game.html
![game](https://user-images.githubusercontent.com/64779472/117028496-bae0ca80-ad38-11eb-98be-dba378aeb750.PNG)

<br />

### 📺 end.html
![end](https://user-images.githubusercontent.com/64779472/117028506-bddbbb00-ad38-11eb-921b-aef5228586fc.PNG)

<br />

### 📺 highScore.html
![highscore](https://user-images.githubusercontent.com/64779472/117028510-bf0ce800-ad38-11eb-9171-c4759611a932.PNG)

<br />

## 🔖 Skill Stack
- HTML
- CSS
- JavaScript

<br />

## 👨🏻‍💻 주요 메서드 및 기능
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

<br />

### 🏃 localStorage
- 세션이나 쿠키 같이 데이터를 저장하는 장소 중의 하나입니다. 
- 로컬스토리지는 일정한 기간이 지나면 삭제되는 세션과는 달리 데이터의 만료기간이 없이 계속 저장됩니다. 

<br />

```js
  // 키에 데이터 쓰기
  localStorage.setItem("key", value);

  // 키로 부터 데이터 읽기
  localStorage.getItem('key');

  // 키의 데이터 삭제
  localStorage.removeItem("key");

  // 모든 키의 데이터 삭제
  localStorage.clear();
```

<br />

### 🏃 windon.location.assign()
- window.location.assign 메서드는 새로운 브라우저 불러오는 메서드이다.

<br />

```js
  window.location.assign("./end.html");
```

