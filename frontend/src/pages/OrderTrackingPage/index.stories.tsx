import { Story } from "@storybook/react";
import React from "react";
import OrderTrackingPage from ".";
import {MemoryRouter} from 'react-router-dom';

export default {
  title: "Pages/Track your order",
  component: OrderTrackingPage,
};

let Template: Story = () => <MemoryRouter><OrderTrackingPage /></MemoryRouter>;

export const TrackOrderStory = Template.bind({});
