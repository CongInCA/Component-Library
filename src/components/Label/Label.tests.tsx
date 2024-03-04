import React from "react";
import { render } from "@testing-library/react";
import Label from "./Label";
import { LabelProps } from "./Label.types";

describe("Label component", () => {
  it("renders with default props", () => {
    const { getByText } = render(<Label text="Default Label" />);
    expect(getByText("Default Label")).toBeInTheDocument();
  });

  it("renders with custom color", () => {
    const { getByText } = render(
      <Label text="Custom Color Label" color="blue" />
    );
    const label = getByText("Custom Color Label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle("color: blue");
  });

  it("renders with custom font size", () => {
    const { getByText } = render(
      <Label text="Custom Font Size Label" fontSize="20px" />
    );
    const label = getByText("Custom Font Size Label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle("font-size: 20px");
  });
});
