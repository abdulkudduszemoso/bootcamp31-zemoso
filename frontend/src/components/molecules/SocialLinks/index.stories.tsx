import { Story } from "@storybook/react";
import React from "react";
import SocialLinks from ".";

export default {
    title: 'Molecules/Social Links',
    component: SocialLinks
}

let Template: Story = () => <SocialLinks />

export const SocialLinksStory = Template.bind({})