import React from "react"
import { render, screen } from "@testing-library/react"
import IconWithText from "."
import Plus from '../../../../public/assets/images/plus.svg';
import '@testing-library/jest-dom';

test('Test - Icon with Text', () => {
    render(<IconWithText buttonText={"Add Something"} startIcon={Plus}></IconWithText>);

    const buttonText = screen.getByText(/Add Something/i);
    expect(buttonText).toBeInTheDocument();
});
