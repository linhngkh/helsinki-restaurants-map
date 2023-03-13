import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders restaurant element", () => {
  render(<App />);
  const element = screen.getByText(/restaurant/i);
  expect(element).toBeInTheDocument();
});
