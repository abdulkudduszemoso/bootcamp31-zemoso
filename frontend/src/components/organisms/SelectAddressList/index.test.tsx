import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import SelectAddressList from "../../organisms/SelectAddressList/index";
import "@testing-library/jest-dom";

test("Select Address List test", () => {
  render(<SelectAddressList addresses={[]} />);
});
