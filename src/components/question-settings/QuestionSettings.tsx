import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectInput } from "../select-input/SelectInput";
import { DifficultyInput } from "../difficulty-input/DifficultyInput";
import { TypeInput } from "../type-input/TypeInput";

export const QuestionSettings = () => {
  const [value, setValue] = useState<number>(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.length === 0) {
      navigate("/user/login");
    }
  }, [navigate]);

  return (
    <div className="form">
      <form action="">
        <label htmlFor="num-of-questions">Number of questions:</label>
        <div className="line"></div>
        <input
          onChange={(e) => setValue(Number(e.target.value))}
          type="number"
          name="num-of-questions"
          id="num-of-questions"
          min="1"
          max="50"
          value={value}
        />
        <label htmlFor="categories">Category:</label>
        <div className="line"></div>
        <SelectInput></SelectInput>
        <DifficultyInput></DifficultyInput>
        <TypeInput></TypeInput>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
