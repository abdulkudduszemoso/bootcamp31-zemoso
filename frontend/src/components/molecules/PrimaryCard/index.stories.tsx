import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import primaryCard from ".";
import PrimaryCard from ".";
import Image1 from "../../../../public/assets/images/test.svg";
import Image2 from "../../../../public/assets/images/home.svg";

export default {
  title: "Molecules/primaryCard",
  component: primaryCard,
} as ComponentMeta<typeof primaryCard>;

const Template: ComponentStory<typeof primaryCard> = (args) => (
  <PrimaryCard {...args} />
);

export const WhyChooseUs = Template.bind({});
WhyChooseUs.args = {
  src: Image1,
  text: "1600+ Tests",
};

export const AtHome = Template.bind({});
AtHome.args = {
  src: Image2,
  text: "At Home Services",
};
