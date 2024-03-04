import React from "react";
import { Meta, Story } from "@storybook/react";
import Text from "./Text";
import { TextProps } from "./Text.types";

export default {
  title: "Text",
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "Default Text",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  content: "Custom Color Text",
  color: "blue",
};

export const CustomFontSize = Template.bind({});
CustomFontSize.args = {
  content: "Custom Font Size Text",
  fontSize: "20px",
};
