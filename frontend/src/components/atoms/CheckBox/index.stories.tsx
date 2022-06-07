import { ComponentProps } from "react";
import React from 'react';
import { Story } from "@storybook/react";
import CheckBox, { CheckBoxProps } from "./index";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme/theme";

export default {
  title: "Atoms/CheckBox",
  component: CheckBox,
};

const Template: Story<ComponentProps<typeof CheckBox>> = (
  args: CheckBoxProps
) => (
  <ThemeProvider theme={theme}>
    <CheckBox {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  label: "Save details for future",
  size: "small",
};
