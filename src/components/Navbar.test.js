import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  it("should render Register component correctly", () => {
    render(<Navbar />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});
