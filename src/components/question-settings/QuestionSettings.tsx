import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SelectInput } from "../select-input/SelectInput";

export const QuestionSettings: FC = () => {
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
          type="number"
          name="num-of-questions"
          id="num-of-questions"
          min="0"
          max="50"
        />
        <label htmlFor="categories">Category:</label>
        <div className="line"></div>
        <SelectInput></SelectInput>
      </form>
    </div>
  );
};
