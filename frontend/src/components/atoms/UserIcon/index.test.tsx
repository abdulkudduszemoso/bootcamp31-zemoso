import React from "react";
import Avatar from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


test("Renders an Avatar", () => {
  render(<Avatar variant="circular"/>);

  const avatar = screen.getByTestId("avatar-test");
  expect(avatar).toBeInTheDocument();

});