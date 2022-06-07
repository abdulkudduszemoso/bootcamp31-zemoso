import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";
import TestInfo from ".";

export default {
  title: "Molecules/TestInfo",
  component: TestInfo,
};

export const Default = () => (
  <ThemeProvider theme={theme}>
    <TestInfo />
  </ThemeProvider>
);
