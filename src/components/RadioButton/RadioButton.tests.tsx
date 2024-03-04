import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RadioButton from "./RadioButton";

test("RadioButton is visible", () => {
  render(<RadioButton label="Option 1" />);

  const radioButton = screen.getByRole("radio");
  expect(radioButton).toBeInTheDocument();
  expect(screen.getByText("Option 1")).toBeInTheDocument();
});

test("RadioButton background color changes when disabled", () => {
  render(<RadioButton label="Option 2" disabled />);

  const radioButton = screen.getByRole("radio");
  const radioButtonContainer = radioButton.parentElement;

  expect(radioButton).toBeDisabled();
  expect(radioButtonContainer).toHaveStyle({ color: "#888888" });
});

test("RadioButton background color doesn't change when not disabled", () => {
  render(<RadioButton label="Option 3" />);

  const radioButton = screen.getByRole("radio");
  const radioButtonContainer = radioButton.parentElement;

  expect(radioButton).not.toBeDisabled();
  expect(radioButtonContainer).not.toHaveStyle({ color: "#888888" });
});

test("RadioButton calls onChange when clicked", () => {
  const onChangeMock = jest.fn();
  render(<RadioButton label="Option 4" onChange={onChangeMock} />);

  const radioButton = screen.getByRole("radio");
  userEvent.click(radioButton);

  expect(onChangeMock).toHaveBeenCalledWith(true);
});
