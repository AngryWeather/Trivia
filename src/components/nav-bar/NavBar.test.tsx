import { render } from "@testing-library/react"
import { NavBar } from "./NavBar"

describe("NavBar", () => {
  it("renders two links", () => {
    const { getAllByRole } = render(<NavBar></NavBar>);
    const listItems = getAllByRole("listitem");
    expect(listItems).toHaveLength(2);
  })
})
