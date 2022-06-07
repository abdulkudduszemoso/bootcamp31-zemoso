import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AddPatient from ".";

export default {
  title: "Organisms/AddPatient",
  component: AddPatient,
} as ComponentMeta<typeof AddPatient>;

const Template: ComponentStory<typeof AddPatient> = () => (
  <AddPatient />
);

export const AddPatientComponent = () => <AddPatient />;
 