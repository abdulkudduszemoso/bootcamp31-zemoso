import { ThemeProvider } from "@mui/material";
import { ComponentStory } from "@storybook/react";
import React from "react";
import theme from "../../../theme/theme";
import PaymentOptions from ".";
export default {
  title: "Molecules/PaymentOptions",
  component: PaymentOptions,
};

const Template: ComponentStory<typeof PaymentOptions> = () => (
  <PaymentOptions />
);

export const options = Template.bind({});
