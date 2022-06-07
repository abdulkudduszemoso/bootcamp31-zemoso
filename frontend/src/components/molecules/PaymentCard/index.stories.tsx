import React from "react";
import PaymentCard from "."

export default{
    title: 'Molecules/Payment Card',
    component: PaymentCard
}

export const Default = () => <PaymentCard cardName={"Sample"} cardNumber={"1244 1234 1345 3255"} cardHolderName={"Yessie"} cardExpiry={"02/25"}></PaymentCard>;
