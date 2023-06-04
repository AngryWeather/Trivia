import { render, screen } from "@testing-library/react";
import { Register } from "./Register";
import { MemoryRouter } from "react-router-dom";

describe("Register component", () => {
  it("renders form element", () => {
    render(
      <MemoryRouter>
        <Register></Register>
      </MemoryRouter>
    );
    const form = screen.getByRole("form", { name: "form" });
    expect(form).toBeInTheDocument();
  });

  // it("username input sets username", () => {
  //   render(
  //     <MemoryRouter>
  //       <Register></Register>
  //     </MemoryRouter>
  //   );
  //   const setUsername = jest.fn();
  //   const input = screen.getByLabelText(/Username/);
  //   fireEvent.change(input, { target: { value: "TestUsername" } });
  //   expect(setUsername).toBeCalledWith(/TestUsername/);
  // });
});
