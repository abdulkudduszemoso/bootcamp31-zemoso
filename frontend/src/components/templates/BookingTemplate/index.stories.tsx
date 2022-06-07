import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookingTestTemplate from "./index";
import React from 'react';

export default {
  title: "Templates/Booking Template",
  component: BookingTestTemplate,
} as ComponentMeta<typeof BookingTestTemplate>;

const Template: ComponentStory<typeof BookingTestTemplate> = (args) => {
  return <BookingTestTemplate {...args} />;
};

export const BookingT = Template.bind({});
BookingT.args = {
  header: <h1>Header of the page</h1>,
  body: <h1>Body of the page</h1>,
  backButton: <h3>Back Button</h3>,
  stepper: <h3>Stepper if any</h3>,
  footer: <h1>Footer of the page</h1>,
};

