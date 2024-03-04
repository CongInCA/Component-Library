import React from "react";
import { Meta, Story } from "@storybook/react";
import Img, { ImgProps } from "./Img";

export default {
  title: "Img",
  component: Img,
} as Meta;

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
  alt: "Google Logo",
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
  alt: "Disabled Google Logo",
  disabled: true,
};
