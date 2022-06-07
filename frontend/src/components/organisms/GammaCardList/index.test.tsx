import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import GammaCardList from ".";
import {MemoryRouter} from 'react-router-dom';

test("Gamma Card test", () => {

    render(<MemoryRouter><GammaCardList /></MemoryRouter>)

    const covid = screen.getByText(/Covid RTPCR/i)
    expect(covid).toBeInTheDocument()

    const fullBodyCheck = screen.getByText(/Full body Check/i)
    expect(fullBodyCheck).toBeInTheDocument()
})