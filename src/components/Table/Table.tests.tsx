import React from "react";
import { render } from "@testing-library/react";
import Table from "./Table";

test("Table is visible", () => {
  const { getByText } = render(
    <Table
      headers={["Name", "Age", "City"]}
      data={[
        { Name: "John", Age: 25, City: "New York" },
        { Name: "Alice", Age: 30, City: "Los Angeles" },
        { Name: "Bob", Age: 28, City: "Chicago" },
      ]}
    />
  );
  const tableHeader = getByText("Name");
  const tableData = getByText("John");
  expect(tableHeader).toBeInTheDocument();
  expect(tableData).toBeInTheDocument();
});

test("Background color changes when Table is disabled", () => {
  const { container, rerender } = render(
    <Table
      headers={["Name", "Age", "City"]}
      data={[
        { Name: "John", Age: 25, City: "New York" },
        { Name: "Alice", Age: 30, City: "Los Angeles" },
        { Name: "Bob", Age: 28, City: "Chicago" },
      ]}
    />
  );

  const tableContainer = container.firstChild as HTMLElement;
  expect(tableContainer).not.toHaveStyle("opacity: 0.7;");

  rerender(
    <Table
      headers={["Name", "Age", "City"]}
      data={[
        { Name: "John", Age: 25, City: "New York" },
        { Name: "Alice", Age: 30, City: "Los Angeles" },
        { Name: "Bob", Age: 28, City: "Chicago" },
      ]}
      disabled
    />
  );

  expect(tableContainer).toHaveStyle("opacity: 0.7;");
});
