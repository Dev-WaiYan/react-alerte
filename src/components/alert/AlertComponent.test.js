import { render, screen } from "@testing-library/react";
import AlertComponent from "./AlertComponent";

test("renders Alert properly", () => {
  const title = "Title";
  const text = "Alert Text";

  render(<AlertComponent alertTitle={title} text={text} />);

  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(text)).toBeInTheDocument();
});
