import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavItemList from ".";

export default {
  title: "Molecules/NavItemList",
  component: NavItemList,
} as ComponentMeta<typeof NavItemList>;

const Template: ComponentStory<typeof NavItemList> = (args) => (
  <NavItemList {...args} />
);

export const items = Template.bind({});

items.args = {
  title1: "Home",
  title2: "Report",
  title3: "My Appointments",
  activeItem: "Home",
};
