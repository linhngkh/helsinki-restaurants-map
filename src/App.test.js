import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders restaurant title", () => {
  render(<App />);
  const element = screen.getByText(/Restaurants In Helsinki/i);
  expect(element).toBeInTheDocument();
});
