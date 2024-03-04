import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    primary: {
      control: "boolean",
      defaultValue: false,
    },
    label: {
      control: "text",
      defaultValue: "Button",
    },
    backgroundColor: {
      control: "color",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      defaultValue: "medium",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    onClick: {
      action: "clicked",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  backgroundColor: "blue",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large Button",
};
