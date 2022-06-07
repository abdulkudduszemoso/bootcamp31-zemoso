import React from "react";
import Loader from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


test("Renders a Loader", () => {
  render(<Loader   />);

 
  const ele = screen.getByTestId("loader");
  expect(ele).toBeInTheDocument();

});