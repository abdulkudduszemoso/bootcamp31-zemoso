import React from "react";
import RadioButton from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


test("Renders a RadioButton", () => {
  render(<RadioButton  label="male"  />);

  const text = screen.getByText("male");
  expect(text).toBeInTheDocument();

  const ele = screen.getByTestId("radio-button");
  expect(ele).toBeInTheDocument();

});