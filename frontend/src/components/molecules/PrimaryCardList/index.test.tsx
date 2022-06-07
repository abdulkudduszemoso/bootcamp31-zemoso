import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import PrimaryCardList from ".";

test("Primary Card List test", () => {
    render(<PrimaryCardList />)

    let text = screen.getByText(/Reports in 24-48 Hours/)
    expect(text).toBeInTheDocument();
})