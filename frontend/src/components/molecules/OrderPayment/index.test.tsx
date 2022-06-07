import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import OrderPayment from ".";

test("Order payment test", () => {
    render(<OrderPayment cardName={"Test Card"} cardNumber={"1223435 5395"} cardHolderName={"Prajeev"} cardExpiry={"12/23"} />);
    
    let name = screen.getByText(/Prajeev/);
    expect(name).toBeInTheDocument();
})