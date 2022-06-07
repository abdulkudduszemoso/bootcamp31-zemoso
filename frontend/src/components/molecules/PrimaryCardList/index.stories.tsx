import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import primaryCardList from ".";
import PrimaryCardList from ".";

export default {
  title: "Molecules/primaryCardList",
  component: primaryCardList,
} as ComponentMeta<typeof primaryCardList>;

const Template: ComponentStory<typeof primaryCardList> = () => (
  <PrimaryCardList />
);

export const Card1 = Template.bind({});
