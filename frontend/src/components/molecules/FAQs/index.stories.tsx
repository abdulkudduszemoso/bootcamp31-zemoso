import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FAQs from ".";

export default {
  title: "Molecules/FAQs",
  component: FAQs,
} as ComponentMeta<typeof FAQs>;

const Template: ComponentStory<typeof FAQs> = () => <FAQs />;

export const FAQ = () => <FAQs />;
