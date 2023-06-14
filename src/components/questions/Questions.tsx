import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Questions = () => {
  const { state } = useLocation();
  const { responseBody } = state;
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState([
    ...responseBody.results[currentQuestion].incorrect_answers.concat(
      responseBody.results[currentQuestion].correct_answer
    ),
  ]);

  useEffect(() => {
    console.log("Response Body");
    console.log(responseBody.results.length);
    console.log(currentQuestion);
    console.log(responseBody);
    console.log(answers);
  }, [responseBody, answers]);

  useEffect(() => {
    const shuffle = () => {
      setAnswers(answers.sort(() => Math.random() - 0.5));
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
          {answers.map((n, key) => (
            <button
              className="answer-button"
              key={key}
              dangerouslySetInnerHTML={{ __html: n }}
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
