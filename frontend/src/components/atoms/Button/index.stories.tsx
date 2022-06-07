import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Buttons from "./index";
import AddIcon from "../../../../public/assets/images/add.svg";
import Image from "../Image";

export default {
  title: "Atoms/Buttons",
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = (args) => (
  <Buttons {...args} />
);

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  variant: "contained",
  name: "Continue",
  variantSize: "large",
  size: "large",
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  variant: "outlined",
  name: "Back To Home",
  variantSize: "small",
};

export const TextButton = Template.bind({});
TextButton.args = {
  variant: "text",
  name: "Cancel",
  variantSize: "text",
};

export const TextIconButton = Template.bind({});
TextIconButton.args = {
  variant:"text",
  name: "Add Patient",
  variantSize: "text",
  startIcon: <Image src={AddIcon}/>
}
