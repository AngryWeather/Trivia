import { FC } from "react";

export const TypeInput: FC = () => {
  return (
    <div>
      <label>Type:</label>
      <div className="line"></div>
      <div className="radio-inputs">
        <div className="option">
          <label htmlFor="any-type">any</label>
          <input type="radio" name="type" id="any-type" checked />
        </div>
        <div className="option">
          <label htmlFor="boolean-type">boolean</label>
          <input type="radio" name="type" id="boolean-type" />
        </div>
        <div className="option">
          <label htmlFor="multiple-type">multiple</label>
          <input type="radio" name="type" id="multiple-type" />
        </div>
      </div>
    </div>
  );
};
