import { render,screen } from "@testing-library/react"
import React from "react"
import PaymentCard from "."
import '@testing-library/jest-dom';

test('Test - Payment Card', () => {
    render(<PaymentCard cardName={"Master Card"} cardNumber={"1244 1234 1345 3255"} cardHolderName={"Ricky"} cardExpiry={"05-12"}></PaymentCard>);

    const cardNameText = screen.getByText(/Master Card/i);
    expect(cardNameText).toBeInTheDocument();
    const cardNumberText = screen.getByText(/1244 1234 1345 3255/i);
    expect(cardNumberText).toBeInTheDocument();
    const cardHolderNameText = screen.getByText(/Ricky/i);
    expect(cardHolderNameText).toBeInTheDocument();
    const cardExpiryText = screen.getByText(/05-12/i);
    expect(cardExpiryText).toBeInTheDocument();
});
