import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectInput } from "../select-input/SelectInput";
import { DifficultyInput } from "../difficultu-input/DifficultyInput";

export const QuestionSettings = () => {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.length === 0) {
      setUserLoggedIn(true);
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
        <DifficultyInput></DifficultyInput>
      </form>
    </div>
  );
};
