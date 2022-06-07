import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import SocialLinks from ".";

test("Social Links test", () => {
    render(<SocialLinks />)

    let googlePlay = screen.getByAltText(/google Play/i);
    expect(googlePlay).toBeInTheDocument();

    let appStore = screen.getByAltText(/app store/i);
    expect(appStore).toBeInTheDocument();
})