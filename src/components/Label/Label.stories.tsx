import React from "react";
import { Meta, Story } from "@storybook/react";
import Label from "./Label";
import { LabelProps } from "./Label.types";

export default {
  title: "Label",
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default Label",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  text: "Custom Color Label",
  color: "blue",
};

export const CustomFontSize = Template.bind({});
CustomFontSize.args = {
  text: "Custom Font Size Label",
  fontSize: "20px",
};
