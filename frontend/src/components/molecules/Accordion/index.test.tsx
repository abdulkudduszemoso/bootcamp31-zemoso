import { render, screen } from "@testing-library/react"
import React from "react"
import Accordion from "./index"
import InfoIcon from '../../../../public/assets/images/info.svg';
import '@testing-library/jest-dom';

test('Test - Accordion', () => {
    render(
        <Accordion heading={"Instructions"} 
        information={"Please don't eat."}  
        icon={InfoIcon}/>
    );

    const heading = screen.getByText(/Instructions/i);
    expect(heading).toBeInTheDocument();
    const information = screen.getByText(/Please don't eat./i);
    expect(information).toBeInTheDocument();
})