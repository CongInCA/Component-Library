import React from "react";
import { Meta, Story } from "@storybook/react";
import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

export default {
  title: "Dropdown",
  component: Dropdown,
  argTypes: {
    disabled: { control: "boolean" },
    options: { control: "array" },
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ["Option 1", "Option 2", "Option 3"],
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  disabled: true,
};
