type PropsType = {
  difficulty: string;
  setDifficulty: React.ChangeEventHandler<HTMLInputElement>;
};

export const DifficultyInput = (props: PropsType) => {
  return (
    <div className="difficulty">
      <label>Difficulty:</label>
      <div className="line"></div>
      <div className="radio-inputs">
        <div className="option">
          <label htmlFor="any">any</label>
          <input
            type="radio"
            name="difficulty"
            id="any"
            value="any"
            checked={props.difficulty === "any"}
            onChange={props.setDifficulty}
          />
        </div>
        <div className="option">
          <label htmlFor="easy">easy</label>
          <input
            type="radio"
            name="difficulty"
            id="easy"
            value="easy"
            checked={props.difficulty === "easy"}
            onChange={props.setDifficulty}
          />
        </div>
        <div className="option">
          <label htmlFor="medium">medium</label>
          <input
            type="radio"
            name="difficulty"
            id="medium"
            value="medium"
            checked={props.difficulty === "medium"}
            onChange={props.setDifficulty}
          />
        </div>
        <div className="option">
          <label htmlFor="hard">hard</label>
          <input
            type="radio"
            name="difficulty"
            id="hard"
            value="hard"
            checked={props.difficulty === "hard"}
            onChange={props.setDifficulty}
          />
        </div>
      </div>
    </div>
  );
};
