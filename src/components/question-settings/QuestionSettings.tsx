import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      </form>
    </div>
  );
};
