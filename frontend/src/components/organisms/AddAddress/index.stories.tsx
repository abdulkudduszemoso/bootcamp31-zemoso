import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import AddAddress from ".";


export default {
  title: "Organisms/Add Address",
  component: AddAddress,
} as ComponentMeta<typeof AddAddress>;
const Template: ComponentStory<typeof AddAddress> = () => <AddAddress />;
export const address = Template.bind({});
