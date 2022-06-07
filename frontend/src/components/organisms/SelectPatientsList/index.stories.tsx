import { ComponentStory } from "@storybook/react";
import React from "react";
import SelectPatient from ".";

export default {
    title: 'Organisms/Select Patients',
    component: SelectPatient
}

const Template: ComponentStory<typeof SelectPatient> = () => <SelectPatient />

export const Story = Template.bind({})