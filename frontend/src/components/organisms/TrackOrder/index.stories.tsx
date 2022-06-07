import { Story } from "@storybook/react";
import React from "react";
import TrackOrder from ".";

export default {
    title: 'Organisms/Track your order',
    component: TrackOrder
}

let Template: Story = () => <TrackOrder />

export const TrackOrderStory = Template.bind({})
