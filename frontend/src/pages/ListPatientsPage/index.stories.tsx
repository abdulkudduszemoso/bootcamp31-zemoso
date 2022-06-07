import ListPatientDetailsPage from ".";
import {Story} from '@storybook/react'
import React from "react";
import {MemoryRouter} from 'react-router-dom';

export default {
    title: 'Pages/List Patient Details Page',
    component: ListPatientDetailsPage
}

const Template: Story = () => <MemoryRouter><ListPatientDetailsPage /></MemoryRouter>

export const AddPatientDetailsStory = Template.bind({})