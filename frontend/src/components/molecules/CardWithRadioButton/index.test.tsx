import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import CardWithRadioButton from "./index";

const data = {
  id: 1,
  addressNumber: "Test Address",
  addressType: "Test",
  houseNo: "2231 California Street APT#021",
  area: "View California",
  zipCode: "11024",
  city: "Mountain",
  state: "California CA"
}

test("Select Address Item test", () => {
  render(
    <CardWithRadioButton
      cardData={data}
    />
  );

  const houseNo = screen.getByText(
    /2231 California Street APT#021/i
  );
  expect(houseNo).toBeInTheDocument();

  const area = screen.getByText(
    /View California/i
  );
  expect(area).toBeInTheDocument();

  const zipCode = screen.getByText(
    /11024/i
  );
  expect(zipCode).toBeInTheDocument();
});
