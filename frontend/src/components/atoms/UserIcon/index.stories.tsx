import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserIcon from ".";
import React from "react";
import Covid from "../../../../public/assets/images/covid.svg";
import TestTube from "../../../../public/assets/images/test.svg";
import BodyTest from "../../../../public/assets/images/bodytest.svg";

export default {
  title: "Atoms/Icons",
  component: UserIcon,
} as ComponentMeta<typeof UserIcon>;

const Template: ComponentStory<typeof UserIcon> = (args) => <UserIcon {...args} />;

export const Icon1 = Template.bind({});
Icon1.args = {
  variant: "rounded",
  src: Covid,
};

export const Icon2 = Template.bind({});
Icon2.args = {
  variant: "square",
  src: BodyTest,
};

export const Icon3 = Template.bind({});
Icon3.args = {
  variant: "circular",
  src: TestTube,
};
