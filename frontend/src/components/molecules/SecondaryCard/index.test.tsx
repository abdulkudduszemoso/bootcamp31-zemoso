import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import SecondaryCard from ".";

test("Secondary Card test", () => {
    render(<SecondaryCard variant={"circular"} title={"Secondary Card Test"} />)

    const title = screen.getByText(/Secondary Card Test/)
    expect(title).toBeInTheDocument();
})