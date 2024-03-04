import React from "react";
import { render } from "@testing-library/react";
import Text from "./Text";
import { TextProps } from "./Text.types";

describe("Text component", () => {
  it("renders with default props", () => {
    const { getByText } = render(<Text content="Default Text" />);
    expect(getByText("Default Text")).toBeInTheDocument();
  });

  it("renders with custom color", () => {
    const { getByText } = render(
      <Text content="Custom Color Text" color="blue" />
    );
    const text = getByText("Custom Color Text");
    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle("color: blue");
  });

  it("renders with custom font size", () => {
    const { getByText } = render(
      <Text content="Custom Font Size Text" fontSize="20px" />
    );
    const text = getByText("Custom Font Size Text");
    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle("font-size: 20px");
  });
});
