import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import AddAddressPage from "./index";
import {MemoryRouter} from 'react-router-dom';

export default {
  title: "Pages/Add Address Page",
  component: AddAddressPage,
} as ComponentMeta<typeof AddAddressPage>;

const Template: ComponentStory<typeof AddAddressPage> = () => (
  <MemoryRouter><AddAddressPage /></MemoryRouter>
);

export const AddAddressPageStep = Template.bind({});
AddAddressPageStep.args = {
  steps: ["Lab Test", "Select appointment", "Add Address", "Review Order"],
  activeIndex: 2,
};
