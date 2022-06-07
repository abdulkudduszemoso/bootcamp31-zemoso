import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextField from ".";

export default {
  title: "Atoms/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);
const printingEnteredText = (e: { target: { value: any } }) => {
  console.log(e.target.value);
};
export const TextFieldBar = Template.bind({});
TextFieldBar.args = {
  placeholder: "Ex:ChandraShekar@zemosolabs.com",
  onChange: printingEnteredText,
};
