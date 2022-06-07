import { ComponentProps } from "react";
import React from 'react';
import { Story } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme/theme";
import StepperBottomContent, {
  StepperBottomContentProps,
} from ".";

export default {
  title: "Molecules/StepperBottomContent",
  component: StepperBottomContent,
};

const Template: Story<ComponentProps<typeof StepperBottomContent>> = (
  args: StepperBottomContentProps
) => (
  <ThemeProvider theme={theme}>
    <StepperBottomContent {...args} />
  </ThemeProvider>
);
export const Primary = Template.bind({});
Primary.args = {
  tab: "primary",
  buttonName: "Add Patient",
};
export const SelectPatientTab = Template.bind({});
SelectPatientTab.args = {
  tab: "selectPatientTab",
  totalNumberOfPatientsSelected: "1",
  buttonName: "Select Lab",
};

export const SelectLab = Template.bind({});
SelectLab.args = {
  tab: "selectLabTab",
  labName: "Los Altos Center Lab",
  testPrice: "$1200",
  totalNumberOfTestsSelected: "1",
  buttonName: "Select Date & Time",
};
