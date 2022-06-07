import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import StepperBottomContent from ".";

const onClick = () => {
    
}

test("Stepper Bottom Content Test", () => {
    render(<StepperBottomContent tab={"selectPatientTab"} buttonName={"Select Patient Test"} onClickButton={onClick}/>)

    const buttonName = screen.getByText(/Select Patient Test/)
    expect(buttonName).toBeInTheDocument();
})