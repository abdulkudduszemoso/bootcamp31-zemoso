import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import TrackOrder from ".";

test("Track Order test", () => {
    render(<TrackOrder />)

    const esther = screen.getByText(/Esther Howard/i)
    expect(esther).toBeInTheDocument()

    const mainText = screen.getByText(/Sample Collection/i)
    expect(mainText).toBeInTheDocument()

    const subText = screen.getByText(/On Tue, 23 Feb, 7.00 - 8.00 AM/i)
    expect(subText).toBeInTheDocument()
})