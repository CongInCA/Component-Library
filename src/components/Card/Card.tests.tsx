import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

test("Card is visible", () => {
  const { getByText } = render(
    <Card title="Test Card" content="This is a test card." />
  );
  const cardTitle = getByText("Test Card");
  const cardContent = getByText("This is a test card.");
  expect(cardTitle).toBeInTheDocument();
  expect(cardContent).toBeInTheDocument();
});

test("Background color changes when Card is disabled", () => {
  const { container, rerender } = render(
    <Card title="Test Card" content="This is a test card." />
  );

  const cardContainer = container.firstChild as HTMLElement;
  expect(cardContainer).not.toHaveStyle("background-color: #f0f0f0;");

  rerender(<Card title="Test Card" content="This is a test card." disabled />);

  expect(cardContainer).toHaveStyle("background-color: #f0f0f0;");
});
