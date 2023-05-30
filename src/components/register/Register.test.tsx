import { render } from "@testing-library/react";
import { Register } from "./Register";

describe("Register component", () => {
  const setup = () => {
    const utils = render(<Register></Register>);
    return {
      ...utils,
    };
  };
});
