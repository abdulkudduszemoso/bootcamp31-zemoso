import React from "react";
import CheckBox from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


test("Renders a CheckBox", () => {
  render(<CheckBox  label="english"   size="medium" checked={false} />);

  const text = screen.getByText("english");
  expect(text).toBeInTheDocument();

  const checkbox = screen.getByTestId("checkbox");
  expect(checkbox).toBeInTheDocument();
});