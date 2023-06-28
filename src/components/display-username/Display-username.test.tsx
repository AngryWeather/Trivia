import { render, screen } from "@testing-library/react";
import { DisplayUsername } from "./Display-username";

describe("DisplayUsername component", () => {
  it("renders TestUsername", () => {
    render(<DisplayUsername currentUser="TestUsername"></DisplayUsername>);
    const userParagraph = screen.getByText("TestUsername");
    expect(userParagraph).toHaveTextContent(/^TestUsername$/);
  });
});
