import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stepper from ".";

export default {
  title: "Molecules/BreadCrumb-Stepper",
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (props) => (
  <Stepper {...props} />
);

export const BreadCrumb = Template.bind({});
BreadCrumb.args = {
  steps: ["Home", "Covid RTPCR", "Add Patient"],
  activeIndex: 1,
};
