import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Questions = () => {
  const { state } = useLocation();
  const { responseBody } = state;
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  useEffect(() => {
    console.log("Response Body");
    console.log(responseBody);
  }, [responseBody]);

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
          <button className="answer">
            {responseBody.results[currentQuestion].correct_answer}
          </button>
          {responseBody.results[currentQuestion].incorrect_answers.map(
            (n: string) => (
              <button className="answer">{n}</button>
            )
          )}
        </div>
      )}
    </div>
  );
};
