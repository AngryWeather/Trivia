import { FC } from "react";

export const DifficultyInput: FC = () => {
  return (
    <div className="difficulty">
      <label>Difficulty:</label>
      <div className="line"></div>
      <div className="radio-inputs">
        <div className="option">
          <label htmlFor="any">any</label>
          <input type="radio" name="difficulty" id="any" />
        </div>
        <div className="option">
          <label htmlFor="easy">easy</label>
          <input type="radio" name="difficulty" id="easy" />
        </div>

        <div className="option">
          <label htmlFor="medium">medium</label>
          <input type="radio" name="difficulty" id="medium" />
        </div>
        <div className="option">
          <label htmlFor="hard">hard</label>
          <input type="radio" name="difficulty" id="hard" />
        </div>
      </div>
    </div>
  );
};
