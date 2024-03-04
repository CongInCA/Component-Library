import React from "react";
import { Meta, Story } from "@storybook/react";
import RadioButton, { RadioButtonProps } from "./RadioButton";

export default {
  title: "RadioButton",
  component: RadioButton,
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Option 1",
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Option 2",
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Option 3",
  disabled: true,
};
