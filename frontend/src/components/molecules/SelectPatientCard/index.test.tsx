import { render, screen } from "@testing-library/react"
import React from "react"
import SelectPatientCard from "."
import '@testing-library/jest-dom';

test('Test - Select Patient Card', () => {
    render(
        <SelectPatientCard patientName={"Ricky"} relation={"Father"} gender={"Male"} age={"45 years"} />
    )
    const patientNameText = screen.getByText(/Ricky/i);
    expect(patientNameText).toBeInTheDocument();
    const relationText = screen.getByText(/Father/i);
    expect(relationText).toBeInTheDocument();
    const genderText = screen.getByText(/Male/i);
    expect(genderText).toBeInTheDocument();
    const ageText = screen.getByText(/45 years/i);
    expect(ageText).toBeInTheDocument();
})