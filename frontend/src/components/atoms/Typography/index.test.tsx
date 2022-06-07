import { render, screen } from "@testing-library/react"
import React from "react"
import TypographyComponent from "."

import '@testing-library/jest-dom';

test('Test Typography', () => {


    

    render(
        <TypographyComponent variant="h1" text="h1-text"  />
    );

    const h1 = screen.getByText("h1-text");
    expect(h1).toBeInTheDocument();

    render(
        <TypographyComponent variant="h2" text="h2-text"  />
    );

    const h2 = screen.getByText("h2-text");
    expect(h2).toBeInTheDocument();

    render(
        <TypographyComponent variant="h3" text="h3-text"  />
    );

    const h3 = screen.getByText("h3-text");
    expect(h3).toBeInTheDocument();

    render(
        <TypographyComponent variant="h4" text="h4-text"  />
    );

    const h4 = screen.getByText("h4-text");
    expect(h4).toBeInTheDocument();

    render(
        <TypographyComponent variant="h5" text="h5-text"  />
    );

    const h5 = screen.getByText("h5-text");
    expect(h5).toBeInTheDocument();

    render(
        <TypographyComponent variant="subtitle1" text="subtitle1-text"  />
    );

    const subtitle1 = screen.getByText("subtitle1-text");
    expect(subtitle1).toBeInTheDocument();


    render(
        <TypographyComponent variant="body3" text="body3-text"  />
    );

    const body3 = screen.getByText("body3-text");
    expect(body3).toBeInTheDocument();

    render(
        <TypographyComponent variant="heading3" text="heading3-text"  />
    );

    const heading3 = screen.getByText("heading3-text");
    expect(heading3).toBeInTheDocument();

    
})