import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CheckoutPage from "./index";
import {MemoryRouter} from 'react-router-dom';

export default {
  title: "Pages/Checkout Page",
  component: CheckoutPage,
} as ComponentMeta<typeof CheckoutPage>;

// const Template: ComponentStory<typeof CheckoutPage> = () => <MemoryRouter><CheckoutPage /></MemoryRouter>;

// export const Checkout = Template.bind({});
