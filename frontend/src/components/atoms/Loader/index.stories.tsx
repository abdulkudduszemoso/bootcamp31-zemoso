import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loader from ".";

export default {
  title: "Atoms/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (props) => (
  <Loader {...props} />
);

export const LoaderOne = Template.bind({});
LoaderOne.args = {
  variant: "primary",
};
export const LoaderSecond = Template.bind({});
LoaderSecond.args = {
  variant: "secondary",
};
