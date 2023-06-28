type PropsType = {
  type: string;
  setType: React.ChangeEventHandler<HTMLInputElement>;
};

export const TypeInput = (props: PropsType) => {
  return (
    <div>
      <label>Type:</label>
      <div className="line"></div>
      <div className="radio-inputs">
        <div className="option">
          <label htmlFor="any-type">any</label>
          <input
            type="radio"
            name="type"
            value="any"
            id="any-type"
            checked={props.type === "any"}
            onChange={props.setType}
          />
        </div>
        <div className="option">
          <label htmlFor="boolean-type">boolean</label>
          <input
            type="radio"
            name="type"
            id="boolean-type"
            value="boolean"
            checked={props.type === "boolean"}
            onChange={props.setType}
          />
        </div>
        <div className="option">
          <label htmlFor="multiple-type">multiple</label>
          <input
            type="radio"
            name="type"
            id="multiple-type"
            value="multiple"
            checked={props.type === "multiple"}
            onChange={props.setType}
          />
        </div>
      </div>
    </div>
  );
};
