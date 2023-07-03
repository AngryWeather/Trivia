import { SyntheticEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Questions = () => {
  const { state } = useLocation();
  const { responseBody } = state;
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [knownAnswer, setKnownAnswer] = useState<boolean>(false);
  const [answers, setAnswers] = useState([
    ...responseBody.results[currentQuestion].incorrect_answers.concat(
      responseBody.results[currentQuestion].correct_answer
    ),
  ]);
  const [shuffledAnswers, setShuffledAnswers] =
    useState<Array<string>>(answers);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const shuffle = () => {
      setShuffledAnswers(answers.sort(() => Math.random() - 0.5));
    };
    shuffle();
  }, [answers]);

  useEffect(() => {
    setAnswers([
      ...responseBody.results[currentQuestion].incorrect_answers.concat(
        responseBody.results[currentQuestion].correct_answer
      ),
    ]);
  }, [currentQuestion, responseBody.results]);

  const onNextHandler = () => {
    setCurrentQuestion(currentQuestion + 1);
    setKnownAnswer(false);
  };

  const evaluateScore = () => {
    switch (responseBody.results[currentQuestion].difficulty) {
      case "easy":
        setScore(score + 1);
        break;
      case "medium":
        setScore(score + 2);
        break;
      case "hard":
        setScore(score + 3);
        break;
    }
  };

  const onAnswerClickHandler = (e: SyntheticEvent) => {
    setKnownAnswer(true);
    if (
      (e.target as HTMLInputElement).value ===
      responseBody.results[currentQuestion].correct_answer
    ) {
      evaluateScore();
    }
  };

  return (
    <div className="form">
      <div className="row">
        <p>Category: {responseBody.results[currentQuestion].category}</p>
      </div>
      <div className="row">
        <p>Difficulty: {responseBody.results[currentQuestion].difficulty}</p>
      </div>
      <div className="row">
        <p> Score: {score} </p>
        <p>
          Question: {currentQuestion + 1} / {responseBody.results.length}
        </p>
      </div>
      <p
        className="question"
        dangerouslySetInnerHTML={{
          __html: responseBody.results[currentQuestion].question,
        }}
      ></p>
      <div className="answer-buttons">
        {shuffledAnswers.map((n, key) => (
          <button
            className={
              "answer-button " +
              (knownAnswer
                ? n === responseBody.results[currentQuestion].correct_answer
                  ? "correct-answer"
                  : "incorrect-answer"
                : "")
            }
            key={key}
            dangerouslySetInnerHTML={{ __html: n }}
            value={n}
            onClick={onAnswerClickHandler}
            disabled={knownAnswer}
          ></button>
        ))}
      </div>

      {currentQuestion < responseBody.results.length - 1 && (
        <div className="next">
          <button onClick={onNextHandler}>Next</button>
        </div>
      )}
    </div>
  );
};
