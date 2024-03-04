import React from "react";
import { Meta, Story } from "@storybook/react";
import HeroImage, { HeroImageProps } from "./HeroImage";

export default {
  title: "HeroImage",
  component: HeroImage,
} as Meta;

const Template: Story<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
  alt: "Default Hero Image",
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
  alt: "Disabled Hero Image",
  disabled: true,
};
