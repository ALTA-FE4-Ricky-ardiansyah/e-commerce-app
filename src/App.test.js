import { render, screen } from "@testing-library/react";
import App from "./App";
import Routing from "./routes/Routes";

test("renders learn react link", () => {
  render(<Routing />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
