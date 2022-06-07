import AddPatientDetailsPage from ".";
import {Story} from '@storybook/react'
import React from "react";
import {MemoryRouter} from 'react-router-dom';

export default {
    title: 'Pages/Add Patient Details Page',
    component: AddPatientDetailsPage
}

const Template: Story = () => <MemoryRouter><AddPatientDetailsPage /></MemoryRouter>

export const AddPatientDetailsStory = Template.bind({})