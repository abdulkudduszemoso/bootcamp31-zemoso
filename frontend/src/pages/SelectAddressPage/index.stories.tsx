import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SelectAddressPage from ".";

export default {
  title: "Pages/Select Address Page",
  component: SelectAddressPage,
} as ComponentMeta<typeof SelectAddressPage>;

const Template: ComponentStory<typeof SelectAddressPage> = () => {
  return <SelectAddressPage />;
};

export const AddressPage = Template.bind({});
