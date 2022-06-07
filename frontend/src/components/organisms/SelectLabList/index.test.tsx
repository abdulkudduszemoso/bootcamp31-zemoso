import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import SelectLabList from ".";
const Altos = require('../../../../public/assets/images/altos.svg');

const labList = [{
    id: 1,
    labLogo: Altos,
    labName: "Los Altos Center Lab",
    rating: 4.3,
    slots: 4,
    reportsTime: "Reports ready in 24 hrs",
    cost: "$1200 for 1 Test",
}]

test("Select Address List test", () => {
    render(<SelectLabList labList={labList} />)

    const labNameText = screen.getByText(/Los Altos Center Lab/i)
    expect(labNameText).toBeInTheDocument()

    const labCostText = screen.getByText(/1200/i)
    expect(labCostText).toBeInTheDocument()

    const reportsTimeText = screen.getByText(/Reports ready in 24 hrs/i)
    expect(reportsTimeText).toBeInTheDocument()
});
