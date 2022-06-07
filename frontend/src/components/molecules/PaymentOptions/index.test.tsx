import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import PaymentOptions from ".";

test("Payment options test", () => {
    render(<PaymentOptions />)

    let paypal = screen.getByText(/PayPal/)
    expect(paypal).toBeInTheDocument();
})