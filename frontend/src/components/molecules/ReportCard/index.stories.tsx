import { ThemeProvider } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import theme from "../../../theme/theme";
import ReportCard from ".";
export default {
  title: "Molecules/Report Card",
  component: ReportCard,
} as ComponentMeta<typeof ReportCard>;

const Template: ComponentStory<typeof ReportCard> = (args) => (
  <ThemeProvider theme={theme}>
    <ReportCard {...args} />
  </ThemeProvider>
);

export const ReportCard1 = Template.bind({});
ReportCard1.args = {
  labName: "Los Altos Center Lab",
  testName: "COVID RT-PCR Test",
  variant: "upcoming",
};
export const ReportCard2 = Template.bind({});
ReportCard2.args = {
  labName: "Los Altos Center Lab",
  testName: "COVID RT-PCR Test",
  variant: "recent",
  date: "22 Feb 2022",
  time: "8:30 AM",
};
