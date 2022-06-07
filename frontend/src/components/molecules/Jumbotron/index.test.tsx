import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Jumbotron from ".";

test("Jumbotron test", () => {
    render(<Jumbotron />)

    let imgAlt = screen.getByAltText(/family/)
    expect(imgAlt).toBeInTheDocument();

    let text = screen.getByText(/Your health is our priority/)
    expect(text).toBeInTheDocument();
})