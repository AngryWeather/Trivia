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
    console.log(responseBody);
    console.log(answers);
  }, [responseBody, answers]);

  useEffect(() => {
    const shuffle = () => {
      setAnswers(answers.sort(() => Math.random() - 0.5));
    };
    shuffle();
  }, [answers]);

  return (
    <div className="form">
      <div className="row">
        <p>Category: {responseBody.results[currentQuestion].category}</p>
      </div>
      <div className="row">
        <p>Difficulty: {responseBody.results[currentQuestion].difficulty}</p>
      </div>
      <p className="question">
        {responseBody.results[currentQuestion].question}
      </p>
      {responseBody.results[currentQuestion].type === "multiple" && (
        <div>
          {answers.map((n) => (
            <button>{n}</button>
          ))}
        </div>
      )}
    </div>
  );
};
