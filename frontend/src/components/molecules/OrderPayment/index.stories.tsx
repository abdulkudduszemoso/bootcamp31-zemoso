import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import OrderPayment from ".";

export default{
    title:'Molecules/Order Payment',
    component: OrderPayment
} as ComponentMeta<typeof OrderPayment>;

const Template: ComponentStory<typeof OrderPayment> = (args) => (
    <OrderPayment {...args}/>
  );

export const Payment = Template.bind({});
Payment.args = {
    cardName:"Sample",
    cardNumber:"1244 1234 1345 3255",
    cardHolderName:"Yessie",
    cardExpiry:"02/25"
}
