import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ImageWithTypography from ".";
import UserLogo from "../../../../public/assets/images/user.svg";

test("Image with typography test", () => {
    render(<ImageWithTypography src={UserLogo} title={"Patient Details"} variant={"patient"} />)

    let imgAlt = screen.getByAltText(/img/);
    expect(imgAlt).toBeInTheDocument();

    render(<ImageWithTypography src={UserLogo} title={"Footer"} variant="footer"/>);

    const footerTest = screen.getByText(/Footer/i);
    expect(footerTest).toBeInTheDocument();

    render(<ImageWithTypography src={UserLogo} title={"Header"} variant="header"/>);

    const headerTest = screen.getByText(/Header/i);
    expect(headerTest).toBeInTheDocument();

    render(<ImageWithTypography src={UserLogo} title={"Back"} variant="back"/>);

    const backTest = screen.getByText(/Back/i);
    expect(backTest).toBeInTheDocument();

    render(<ImageWithTypography src={UserLogo} title={"Font Weight"} variant="header" fontWeightHigh={true}/>);

    const fontWeightHigh = screen.getByText(/Font Weight/i);
    expect(fontWeightHigh).toBeInTheDocument();


})