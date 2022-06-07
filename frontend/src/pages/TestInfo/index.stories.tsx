import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TestInfoPage from "./index";

export default {
  title: "Pages/TestInfoPage",
  component: TestInfoPage,
} as ComponentMeta<typeof TestInfoPage>;

const Template: ComponentStory<typeof TestInfoPage> = () => (
  <TestInfoPage  />
);

export const TestInfo = () => <TestInfoPage />;