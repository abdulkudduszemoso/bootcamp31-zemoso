import { ThemeProvider } from "@mui/material";
import theme from "../../../theme/theme";
import BulletPoints from "./index";
import React from 'react';

export default {
  title: "Molecules/BulletPoints",
  component: BulletPoints,
};

export const Default = () => (
  <ThemeProvider theme={theme}>
    <BulletPoints />
  </ThemeProvider>
);
