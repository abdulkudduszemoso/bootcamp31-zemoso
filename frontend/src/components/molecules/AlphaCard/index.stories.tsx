import React from "react";
import AlphaCard from "./index";

export default {
  title: "Molecules/Alpha Card",
  component: AlphaCard,
};

export const Default = () => (
  <AlphaCard
    patientName={"Patrick Smith"}
    testName={"COVID RT-PCR Test"}
    address={"2235 California Street Mountain View California APT hsgdjgsbb"}
    cost={"2400"}
  ></AlphaCard>
);
