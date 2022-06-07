import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import OrderPlaced from ".";

test("Order placed component test", () => {
    render(<OrderPlaced />)

    let altText = screen.getByAltText(/logo/)
    expect(altText).toBeInTheDocument();
})