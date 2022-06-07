import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import HeaderLogo from ".";

test("Header logo test", () => {
    render(<HeaderLogo variant={"heading5"}/>)

    let logoAlt = screen.getByAltText(/logo/)
    expect(logoAlt).toBeInTheDocument();
})