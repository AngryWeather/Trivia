import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectInput } from "../select-input/SelectInput";
import { DifficultyInput } from "../difficulty-input/DifficultyInput";
import { TypeInput } from "../type-input/TypeInput";
import { useQuestionSettings } from "../../hooks/useQuestionSettings";

export const QuestionSettings = () => {
  const [numOfQuestions, setNumOfQuestions] = useState<string>("10");
  const [category, setCategory] = useState<string>("Any category");
  const [difficulty, setDifficulty] = useState<string>("any");
  const [type, setType] = useState<string>("any");
  const { handleSubmit, responseStatus, responseBody } = useQuestionSettings({
    numOfQuestions,
    category,
    difficulty,
    type,
  });
  const navigate = useNavigate();

  useEffect(() => {
    console.log(responseStatus);
    console.log(responseBody);
  }, [responseStatus, responseBody]);

  useEffect(() => {
    if (localStorage.length === 0 || responseStatus === 403) {
      navigate("/user/login");
    }
  }, [navigate, responseStatus]);

  return (
    <div className="form">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="num-of-questions">Number of questions:</label>
        <div className="line"></div>
        <input
          onChange={(e) => setNumOfQuestions(e.target.value)}
          type="number"
          name="num-of-questions"
          id="num-of-questions"
          min="1"
          max="50"
          value={numOfQuestions}
        />
        <label htmlFor="categories">Category:</label>
        <div className="line"></div>
        <SelectInput
          setCategory={(e: { target: { value: SetStateAction<string> } }) =>
            setCategory(e.target.value)
          }
        ></SelectInput>
        <DifficultyInput
          difficulty={difficulty}
          setDifficulty={(e) => setDifficulty(e.target.value)}
        ></DifficultyInput>
        <TypeInput
          type={type}
          setType={(e) => setType(e.target.value)}
        ></TypeInput>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
