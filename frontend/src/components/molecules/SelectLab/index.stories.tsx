import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectLabCard from ".";
import Altos from "../../../../public/assets/images/altos.svg";
export default {
  title: "Molecules/SelectLab",
  component: SelectLabCard,
} as ComponentMeta<typeof SelectLabCard>;

const Template: ComponentStory<typeof SelectLabCard> = (props) => (
  <SelectLabCard {...props} />
);

export const TestCard1 = Template.bind({});
TestCard1.args = {
  activeId: 1,
  labData: {
    id: 1,
    labLogo: Altos,
    labName: "Los Altos Center Lab",
    rating: 4.3,
    slots: 4,
    reportsTime: "Reports ready in 24 hrs",
    cost: "$1200 for 1 Test",
  },
};

export const TestCard2 = Template.bind({});
TestCard2.args = {
  activeId: 3,
  labData: {
    id: 2,
    labLogo: Altos,
    labName: "Los Altos Center Lab",
    rating: 4.3,
    slots: 4,
    reportsTime: "Reports ready in 24 hrs",
    cost: "$1200 for 1 Test",
  },
};