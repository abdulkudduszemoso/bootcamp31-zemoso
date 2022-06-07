import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import BulletPoints from './index'

jest.useFakeTimers();

test("Bullet points test", async () => {
    render(<BulletPoints />)
    
    let text = screen.getByText(/Municipal corporation guidelines./)
    expect(text).toBeInTheDocument();
})