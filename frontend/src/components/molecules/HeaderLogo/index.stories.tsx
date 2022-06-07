import { ComponentStory } from "@storybook/react";
import React from "react";
import HeaderLogo from ".";

export default {
  title: "Molecules/HeaderLogo",
  component: HeaderLogo,
};

const Template: ComponentStory<typeof HeaderLogo> = (args) => (
  <HeaderLogo {...args} />
);

export const HeaderLogo1 = Template.bind({});
HeaderLogo1.args = {
  variant: "body1",
};

export const HeaderLogo2 = Template.bind({});
HeaderLogo2.args = {
  variant: "heading5",
};
