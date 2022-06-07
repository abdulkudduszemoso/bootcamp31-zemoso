import { Story } from "@storybook/react";
import React from "react";
import GammaCard, { GammaCardProps } from ".";
import Body from '../../../../public/assets/images/body.svg'
import CovidIcon from '../../../../public/assets/images/covid.svg'

export default {
    title: 'Molecules/Gamma Card',
    component: GammaCard
}

const Template: Story<GammaCardProps> = args => <GammaCard {...args} />

export const FullBodyCheck = Template.bind({})
FullBodyCheck.args = {
    image: Body,
    title: 'Full body Check'
}

export const Covid = Template.bind({})
Covid.args = {
    image: CovidIcon,
    title: 'Covid RTPCR'
}