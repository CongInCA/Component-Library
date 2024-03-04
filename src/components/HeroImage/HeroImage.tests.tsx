import React from "react";
import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";

test("renders HeroImage component", () => {
  render(<HeroImage src="test.jpg" alt="Test Hero Image" />);
  const imgElement = screen.getByAltText("Test Hero Image");
  expect(imgElement).toBeInTheDocument();
});

test("renders disabled HeroImage component", () => {
  render(<HeroImage src="test.jpg" alt="Test Hero Image" disabled />);
  const imgElement = screen.getByAltText("Test Hero Image") as HTMLImageElement;
  expect(imgElement).toBeInTheDocument();
  expect(imgElement.style.filter).toContain("grayscale(100%)");
  expect(imgElement.style.cursor).toBe("not-allowed");
});
