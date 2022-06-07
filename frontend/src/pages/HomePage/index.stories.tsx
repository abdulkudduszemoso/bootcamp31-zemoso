import { Story } from "@storybook/react";
import React from "react";
import HomePage from ".";
import {MemoryRouter} from 'react-router-dom';

export default {
    title: 'Pages/Home Page',
    component: <HomePage />
}

const Template: Story = () => <MemoryRouter><HomePage /></MemoryRouter>

export const Home = Template.bind({})
