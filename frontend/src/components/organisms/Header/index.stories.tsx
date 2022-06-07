import React from "react";
import Header from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;
const Template: ComponentStory<typeof Header> = (props) => (
  <Header {...props} />
);

export const Header1 = Template.bind({});
