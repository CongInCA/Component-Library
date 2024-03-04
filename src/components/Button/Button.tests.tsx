import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("Button is visible", () => {
  render(<Button label="Test Button" />);
  const buttonElement = screen.getByText(/Test Button/i);
  expect(buttonElement).toBeVisible();
});

test("Button background color changes when disabled", () => {
  render(<Button label="Test Button" disabled />);
  const buttonElement = screen.getByText(/Test Button/i);
  expect(buttonElement).toHaveStyle({ backgroundColor: "#dddddd" });
});
