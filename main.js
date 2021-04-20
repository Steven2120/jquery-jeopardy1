//queried body tag
const body = $("body");

//created top section that includes title and score
const titleDiv = $(
  "<div id='app-title'><h1>JEOPARDY!</h1><div id='score-div'>YOUR SCORE:</div></div>"
);

body.append(titleDiv);

const boardDiv = $("<div id='board-grid'></div>");
body.append(boardDiv);

for (let i = 0; i < 5; i++) {
  const box100 = $("<div class='board-box board-100'>$100</div>");
  boardDiv.append(box100);
}

for (let i = 0; i < 5; i++) {
  const box200 = $("<div class='board-box board-200'>$200</div>");
  boardDiv.append(box200);
}

for (let i = 0; i < 5; i++) {
  const box400 = $("<div class='board-box board-400'>$400</div>");
  boardDiv.append(box400);
}

for (let i = 0; i < 5; i++) {
  const box600 = $("<div class='board-box board-600'>$600</div>");
  boardDiv.append(box600);
}

for (let i = 0; i < 5; i++) {
  const box800 = $("<div class='board-box board-800'>$800</div>");
  boardDiv.append(box800);
}

const questionAnswerDisplay = $(
  '<div id="question-answer-display">Answer</div>'
);
body.append(questionAnswerDisplay);

const answerLabel = $(
  '<div id=\'answer-div\'><div id="answer-label" class="answer">YOUR ANSWER<input type="text" class="answer" id="answer-input"><button id="submit" class="answer">SUBMIT</button></div></div>'
);

body.append(answerLabel);

const box100 = $(".board-100");
const box200 = $(".board-200");
const box400 = $(".board-400");
const box600 = $(".board-600");

const questions100 = QUESTIONS.filter((val) => val.value === "$100");
const questions200 = QUESTIONS.filter((val) => val.value === "$200");
const questions400 = QUESTIONS.filter((val) => val.value === "$400");
const questions600 = QUESTIONS.filter((val) => val.value === "$600");

for (const rawButton of box100) {
  const button100 = $(rawButton);

  button100.click(() => {
    questionAnswerDisplay.text(
      questions100[Math.floor(Math.random() * questions100.length).toFixed(0)]
        .question
    );
  });
}

for (const rawButton of box200) {
  const button200 = $(rawButton);

  button200.click(() => {
    questionAnswerDisplay.text(
      questions200[Math.floor(Math.random() * questions200.length).toFixed(0)]
        .question
    );
  });
}

for (const rawButton of box400) {
  const button400 = $(rawButton);

  button400.click(() => {
    questionAnswerDisplay.text(
      questions400[Math.floor(Math.random() * questions400.length).toFixed(0)]
        .question
    );
  });
}

for (const rawButton of box600) {
  const button600 = $(rawButton);

  button600.click(() => {
    questionAnswerDisplay.text(
      questions600[Math.floor(Math.random() * questions600.length).toFixed(0)]
        .question
    );
  });
}
