import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Footer from ".";

test("Footer test", () => {
    render(<Footer />)

    let zemosoDiagnostics = screen.getByText(/Zemoso Diagnostics/i);
    expect(zemosoDiagnostics).toBeInTheDocument();

    let contactUs = screen.getByText(/Contact us/i);
    expect(contactUs).toBeInTheDocument();
})