import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TestInfoPageCards from "./index";

export default {
  title: "molecules/TestInfoPageCards",
  component: TestInfoPageCards,
} as ComponentMeta<typeof TestInfoPageCards>;

const Template: ComponentStory<typeof TestInfoPageCards> = () => (
  <TestInfoPageCards  />
);

export const TestInfoPageCard = () => <TestInfoPageCards />;