import { useEffect, useState } from "react";
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

  useEffect(() => {
    console.log(knownAnswer);
  }, [knownAnswer]);

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

  return (
    <div className="form">
      <div className="row">
        <p>Category: {responseBody.results[currentQuestion].category}</p>
      </div>
      <div className="row">
        <p>Difficulty: {responseBody.results[currentQuestion].difficulty}</p>
      </div>
      <p
        className="question"
        dangerouslySetInnerHTML={{
          __html: responseBody.results[currentQuestion].question,
        }}
      ></p>
      {responseBody.results[currentQuestion].type === "multiple" && (
        <div className="answer-buttons">
          {shuffledAnswers.map((n, key) => (
            <button
              className={
                "answer-button " +
                (n === responseBody.results[currentQuestion].correct_answer
                  ? "correct-answer"
                  : "incorrect-answer")
              }
              key={key}
              dangerouslySetInnerHTML={{ __html: n }}
              onClick={() => setKnownAnswer(true)}
            ></button>
          ))}
        </div>
      )}
      {currentQuestion < responseBody.results.length - 1 && (
        <div className="next">
          <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};
