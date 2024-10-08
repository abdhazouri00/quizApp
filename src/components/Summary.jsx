import React from "react";
import img from "../assets/quiz-complete.png";

function Summary({ correct, questions, answers, skippedQs , wrongAs }) {


  return (
    <div id="summary">
      <img src={img} />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedQs}</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correct}</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAs}</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {answers.map((answer, index) => {
          let cssClass = 'user-answer';

          if (answer === null) {
            cssClass += ' skipped';
          } else if (answer === questions[index].answers[0]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
