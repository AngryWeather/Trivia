import { render, screen } from "@testing-library/react";
import { Login } from "./Login";
import { MemoryRouter } from "react-router-dom";

describe("Login component", () => {
  it("redners login form", () => {
    render(
      <MemoryRouter>
        <Login></Login>
      </MemoryRouter>
    );
    const form = screen.getByRole("form", { name: "form" });
    expect(form).toBeInTheDocument();
  });
});
