import React from "react";
import { render, screen } from "@testing-library/react";
import Img from "./Img";

test("renders Img component", () => {
  render(<Img src="test.jpg" alt="Test Image" />);
  const imgElement = screen.getByAltText("Test Image");
  expect(imgElement).toBeInTheDocument();
});

test("renders disabled Img component", () => {
  render(<Img src="test.jpg" alt="Test Image" disabled />);
  const imgElement = screen.getByAltText("Test Image") as HTMLImageElement;
  expect(imgElement).toBeInTheDocument();
  expect(imgElement.style.filter).toContain("grayscale(100%)");
  expect(imgElement.style.cursor).toBe("not-allowed");
});
