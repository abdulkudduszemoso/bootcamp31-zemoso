import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserLogo from "../../../../public/assets/images/user.svg";
import ImageTypo from ".";

export default {
  title: "Molecules/ImageWithTypography",
  component: ImageTypo,
} as ComponentMeta<typeof ImageTypo>;

const Template: ComponentStory<typeof ImageTypo> = (args) => (
  <ImageTypo {...args} />
);

export const Patient = Template.bind({});

Patient.args = {
  src: UserLogo,
  title: "Patient Details",
  variant: "patient",
};
