import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import GammaCard from ".";

test("Gamma Card test", () => {
    const Body = require('../../../../public/assets/images/body.svg')

    render(<GammaCard image={Body} title={"Full Body Check"} />)

    let text = screen.getByText(/Full Body Check/i)
    expect(text).toBeInTheDocument()
})