import React from "react";
import { Meta, Story } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
  title: "Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default Card",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Disabled Card",
  content: "This card is disabled.",
  disabled: true,
};
