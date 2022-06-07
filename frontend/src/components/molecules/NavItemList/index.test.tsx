import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import NavItemList from ".";

test("Nav item list test", () => {
    render(<NavItemList />)
    
    // let text = screen.getByRole('tab', {name: /My Appointments/})
    // expect(text).toBeInTheDocument();
})