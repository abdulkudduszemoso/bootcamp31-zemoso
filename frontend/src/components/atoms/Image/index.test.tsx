import React from "react";
import Image from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
const props = {
  src: "../../../../public/assets/Images/family.png",
  alt: "family",
  id: "family",
};

test("Renders an Image", () => {
  render(<Image {...props} />);

  const img = screen.getByTestId("image-test");
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("id", "family");
  expect(img).toHaveAttribute(
    "src",
    "../../../../public/assets/Images/family.png"
  );
  expect(img).toHaveAttribute("alt", "family");
});
