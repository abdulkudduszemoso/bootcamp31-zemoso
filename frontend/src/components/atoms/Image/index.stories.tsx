import React from "react";
import Image from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FamilyImage from "../../../../public/assets/images/family.png";
export default {
  title: "atoms/image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;
export const image = Template.bind({});
image.args = {
  src: FamilyImage,
  alt: "family",
  id: "image",
  borderRadius: "50px",
};
