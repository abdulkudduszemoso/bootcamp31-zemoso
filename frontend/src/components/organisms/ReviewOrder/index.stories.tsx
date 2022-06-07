import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReviewOrder from ".";

export default {
  title: "Organisms/ReviewOrder",
  component: ReviewOrder,
} as ComponentMeta<typeof ReviewOrder>;

const Template: ComponentStory<typeof ReviewOrder> = (args) => (
  <ReviewOrder {...args} />
);
