import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Appointment from "./index";

export default {
  title: "Pages/Appointment",
  component: Appointment,
} as ComponentMeta<typeof Appointment>;

const Template: ComponentStory<typeof Appointment> = () => <Appointment />;

export const AppointmentStep = Template.bind({});
AppointmentStep.args = {
  steps: ["Lab Test", "Select appointment", "Add Address", "Review Order"],
  activeIndex: 1,
};
