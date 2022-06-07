import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReportsPage from "./index";

export default {
  title: "Pages/ReportsPage",
  component: ReportsPage,
} as ComponentMeta<typeof ReportsPage>;

const Template: ComponentStory<typeof ReportsPage> = () => (
  <ReportsPage  />
);

export const AddPatientComponent = () => <ReportsPage />;
