import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ReportCard from ".";

test("Report Card test", () => {
    render(<ReportCard labName={"SGL Labs"} testName={"Monkey Pox"} variant={"upcoming"} />)

    const labName = screen.getByText(/SGL Labs/)
    expect(labName).toBeInTheDocument();

    const testName = screen.getByText(/Monkey Pox/)
    expect(testName).toBeInTheDocument();
})