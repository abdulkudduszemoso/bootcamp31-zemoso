import { ComponentProps } from "react";
import React from 'react';
import { Story } from "@storybook/react";
import RadioButton, { RadioButtonProps } from ".";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme/theme";

export default {
  title: "Atoms/RadioButton",
  component: RadioButton,
};

const Template: Story<ComponentProps<typeof RadioButton>> = (
  args: RadioButtonProps
) => (
  <ThemeProvider theme={theme}>
    <RadioButton {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  size: "small",
  label: "Male",
};
