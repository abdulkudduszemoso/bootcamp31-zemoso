import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import FAQs from ".";

test("FAQs test", () => {
    render(<FAQs />)

    let text = screen.getByText(/How soon can I get the report?/)
    expect(text).toBeInTheDocument();
})