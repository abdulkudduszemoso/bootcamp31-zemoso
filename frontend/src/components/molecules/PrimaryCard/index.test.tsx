import Image1 from "../../../../public/assets/images/test.svg";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import PrimaryCard from ".";

test("Primary Card test", () => {
    render(<PrimaryCard text={"At Home Services"} src={Image1} />)
    
    let text = screen.getByText(/At Home Services/)
    expect(text).toBeInTheDocument()
})