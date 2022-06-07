import { ComponentMeta, ComponentStory, Story } from "@storybook/react";
import React from "react";
import CardWithRadioButton from "./index";

export default {
  title: "Molecules/Card With Radio Button",
  component: CardWithRadioButton,
} as ComponentMeta<typeof CardWithRadioButton>;

let Template: ComponentStory<typeof CardWithRadioButton> = (args) => {
  return <CardWithRadioButton {...args} />;
};

export const Card = Template.bind({});
Card.args = {
  activeId: 1,
  cardData: {
    id: 1,
    addressNumber: "Default Address",
    addressType: "Home",
    houseNo: "2235 California Street APT#021",
    area: "Mountain View California",
    zipCode: "11023",
    city: "Mountain View",
    state: "California"
  },
};
