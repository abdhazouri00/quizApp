import "../App.css";
import "../index.css";
import QuizTimer from "./QuizTimer";
import img from "../assets/quiz-complete.png";
import questions from "../../questions";
import React, { useState } from "react";
import Summary from "./Summary";

function Quiz() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [skippedQuestions, setSkippedQuestions] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0)

  const quizIsComplete = activeIndex >= questions.length;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleClick = (answer) => {
    if (activeIndex < questions.length) {
      if (answer === questions[activeIndex].answers[0]) {
        setScore((prevScore) => prevScore + 1);
      } else {
        setWrongAnswer((prevWrong) => prevWrong + 1);
      }

      setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };


  const skipQuestion = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
    setSkippedQuestions(skippedQuestions + 1);
    setUserAnswers((prevAnswers) => [...prevAnswers, ""]);
  };

  if (quizIsComplete) {
    return (
      // <div id="summary">
      //   <img src={img} />
      //   <h2>Quiz Complete</h2>
      //   <p>Your score: {score}</p>
      //   <p>Your answers: {userAnswers.length}</p>
      // </div>
      <Summary
        correct={score}
        questions={questions}
        answers={userAnswers}
        skippedQs={skippedQuestions}
        wrongAs={wrongAnswer}
      />
    );
  }

  const shuffledAnswers = shuffleArray([...questions[activeIndex].answers]);

  return (
    <div id="quiz">
      <div id="question">
        <QuizTimer time={8000} onTimeOut={skipQuestion} />
        <h2>{questions[activeIndex].text}</h2>
        <div id="answers">
          {shuffledAnswers.map((answer, index) => (
            <div className="answer" key={index}>
              <button onClick={() => handleClick(answer)}>{answer}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
