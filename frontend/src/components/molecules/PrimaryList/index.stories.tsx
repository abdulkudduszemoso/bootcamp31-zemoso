import { Story } from "@storybook/react";
import React from "react";
import { ComponentProps } from "react";

import PrimaryList from ".";

export default {
  title: "Molecules/Primary List",
  component: PrimaryList,
};

const Template: Story<ComponentProps<typeof PrimaryList>> = (args) => (
  <PrimaryList {...args} />
);

export const Input = Template.bind({});
Input.args = {
  text: [
    "To check if you have an active COVID-19 infection",
    "If you are showing symptoms of COVID-19 infection",
    "If you had contact with someone with confirmed COVID-19",
  ],
};
