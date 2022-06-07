import { Story } from "@storybook/react";
import React from "react";
import SelectAppointment from ".";

export default {
    title: 'Organisms/Select Appointment',
    component: SelectAppointment
}

let Template: Story = () => <SelectAppointment />

export const SelectAppointmentTest = Template.bind({})

