import { Story } from "@storybook/react";
import React from "react";
import GammaCardList from ".";
import {MemoryRouter} from 'react-router-dom';

export default {
    title: 'Organisms/Gamma Card List',
    component: GammaCardList
}

let Template: Story = () => <MemoryRouter><GammaCardList /></MemoryRouter>

export const GammaCards = Template.bind({})