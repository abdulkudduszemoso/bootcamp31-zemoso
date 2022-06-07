import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import LabTest from "./index";
import {MemoryRouter} from 'react-router-dom';

export default {
  title: "Pages/Lab Test",
  component: LabTest,
} as ComponentMeta<typeof LabTest>;

const Template: ComponentStory<typeof LabTest> = () => <MemoryRouter><LabTest /></MemoryRouter>;

export const LabTestStep = Template.bind({});
LabTestStep.args = {
  steps: ["Lab Test", "Select appointment", "Add Address", "Review Order"],
  activeIndex: 0,
};
