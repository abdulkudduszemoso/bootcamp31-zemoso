import React from "react";
import TextField from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
const props = {
    
    placeholder:"Hello",

    
};

test("Renders an Text Field", () => {
  render(<TextField {...props}/>);

  const textbox = screen.getByTestId("text-box");
  expect(textbox).toBeInTheDocument();
  const placeholderText = screen.getByPlaceholderText('Hello')
  expect(placeholderText).toBeInTheDocument();

  
});
