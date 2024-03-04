import React from "react";
import { Meta, Story } from "@storybook/react";
import Table, { TableProps } from "./Table";

export default {
  title: "Table",
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ["Name", "Age", "City"],
  data: [
    { Name: "John", Age: 25, City: "New York" },
    { Name: "Alice", Age: 30, City: "Los Angeles" },
    { Name: "Bob", Age: 28, City: "Chicago" },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  headers: ["Name", "Age", "City"],
  data: [
    { Name: "John", Age: 25, City: "New York" },
    { Name: "Alice", Age: 30, City: "Los Angeles" },
    { Name: "Bob", Age: 28, City: "Chicago" },
  ],
  disabled: true,
};
