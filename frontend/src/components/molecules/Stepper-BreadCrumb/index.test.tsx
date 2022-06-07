import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Stepper from ".";

test("Stepper Test", () => {
    render(<Stepper steps={["Stepper Test"]} />)

    const steps = screen.getByText(/Stepper Test/)
    expect(steps).toBeInTheDocument();
})