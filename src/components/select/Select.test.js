import { render, screen, fireEvent } from "@testing-library/react";
import Select from "./Select";

test("renders Select and working when option changes properly", () => {
  const options = [
    { text: "option 1", value: "one" },
    { text: "option 2", value: "two" },
  ];

  render(<Select options={options} data-testid="t1" />);

  const select = screen.getByTestId("t1");
  expect(select).toBeInTheDocument();
  expect(select.value).toBe("");

  fireEvent.change(select, { target: { value: options[1].value } });
  expect(select.value).toBe(options[1].value);
});
