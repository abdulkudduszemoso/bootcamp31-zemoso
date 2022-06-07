import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ReviewOrderPage from "./index";

export default {
  title: "Pages/Review Order Page",
  component: ReviewOrderPage,
} as ComponentMeta<typeof ReviewOrderPage>;

const Template: ComponentStory<typeof ReviewOrderPage> = () => (
  <ReviewOrderPage />
);

export const ReviewOrderStep = Template.bind({});
ReviewOrderStep.args = {
  steps: ["Lab Test", "Select appointment", "Add Address", "Review Order"],
  activeIndex: 3,
};
