import { render, screen } from "@testing-library/react";
import React from "react";
import AlphaCard from "./index"
import '@testing-library/jest-dom';

test('Test - Alpha Card', () => {
    
    render(<AlphaCard patientName={"Ricky"} testName={"COVID"} address={"California"} cost={"20000"}></AlphaCard>);
    
    const patientNameText = screen.getByText(/Ricky/i);
    expect(patientNameText).toBeInTheDocument();
    const testNameText = screen.getByText(/COVID/i);
    expect(testNameText).toBeInTheDocument();
});
