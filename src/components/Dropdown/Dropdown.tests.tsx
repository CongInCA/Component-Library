import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "./Dropdown";

test("Dropdown is visible", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  render(<Dropdown options={options} />);

  // Check that the dropdown is visible
  const dropdownElement = screen.getByRole("combobox");
  expect(dropdownElement).toBeInTheDocument();

  // Check that options are visible
  options.forEach((option) => {
    const optionElement = screen.getByText(option);
    expect(optionElement).toBeInTheDocument();
  });
});

test("Dropdown background color changes when disabled", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  render(<Dropdown options={options} disabled />);

  // Check that the dropdown is disabled
  const dropdownElement = screen.getByRole("combobox");
  expect(dropdownElement).toBeDisabled();

  // Check that the background color changes when disabled
  const dropdownContainer = dropdownElement.parentElement;
  expect(dropdownContainer).toHaveStyle({ backgroundColor: "lightgray" });
});

test("Dropdown background color doesn't change when not disabled", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  render(<Dropdown options={options} />);

  // Check that the dropdown is not disabled
  const dropdownElement = screen.getByRole("combobox");
  expect(dropdownElement).not.toBeDisabled();

  // Check that the background color doesn't change when not disabled
  const dropdownContainer = dropdownElement.parentElement;
  expect(dropdownContainer).not.toHaveStyle({ backgroundColor: "lightgray" });
});
