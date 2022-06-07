import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import TestimonialCard from ".";


test("Stepper Bottom Content Test", () => {
    render(<TestimonialCard />)

    const title = screen.getByText(/Customer Testimonials/i)
    expect(title).toBeInTheDocument();
})