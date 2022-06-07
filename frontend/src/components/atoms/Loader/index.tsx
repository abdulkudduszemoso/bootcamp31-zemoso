import React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import theme, { Colors } from "../../../theme/theme";

export interface LoaderProps {
  variant?: "primary" | "secondary";
  backButton?: React.ReactNode;
  nextButton?: React.ReactNode;
}
const Loader = ({
  variant = "primary",
  backButton = undefined,
  nextButton = undefined,
}: LoaderProps) => {
  const maxSteps = 3;
  const activeStep = 0;
  let temp: any;
  if (variant === "primary") {
    temp = {
      "& .MuiMobileStepper-dot": {
        backgroundColor: Colors.white,
        border: `0.5px solid ${theme.palette.grey["300"]}`,
      },
      "& .MuiMobileStepper-dotActive": {
        backgroundColor: theme.palette.secondary.dark,
        border: `0.5px solid  ${Colors.white}`,
      },
    };
  } else {
    temp = {
      "& .MuiMobileStepper-dot": {
        backgroundColor: theme.palette.secondary.dark,
        border: `0.5px solid  ${Colors.white}`,
      },
      "& .MuiMobileStepper-dotActive": {
        backgroundColor: Colors.white,
        border: `0.5px solid ${theme.palette.grey["300"]}`,
      },
    };
  }

  return (
    <MobileStepper
      style={{ background: "none" }}
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      backButton={backButton}
      nextButton={nextButton}
      sx={temp}
      data-testid="loader"
    />
  );
};

export default Loader;
