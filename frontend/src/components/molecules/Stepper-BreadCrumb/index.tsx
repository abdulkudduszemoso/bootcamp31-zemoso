import MuiStepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import React from "react";
import { Box } from "@mui/material";
import theme from "../../../theme/theme";

export interface StepperProps {
  steps: string[];
  activeIndex?: number;
}
const Stepper = ({ steps, activeIndex = 0 }: StepperProps) => {
  if (activeIndex >= steps.length - 1) {
    activeIndex = steps.length - 1;
  }
  if (activeIndex < 0) {
    activeIndex = 0;
  }
  return (
    <Box>
      <MuiStepper
        activeStep={activeIndex}
        connector={
          <hr
            style={{
              width: "68px",
              margin: `0px ${theme.spacing(1.5)}`,
            }}
          />
        }
      >
        {steps.map((label: string, index: React.Key) => {
          return (
            <Step
              key={index}
              sx={{
                "& .MuiStepLabel-root .Mui-disabled": {
                  color: theme.palette.secondary.light,
                  fontSize: "14px",
                  lineHeight: "18px",
                },
                "& .MuiStepLabel-root .Mui-completed": {
                  color: theme.palette.secondary.light,
                  fontSize: "14px",
                  lineHeight: "18px",
                },

                "& .MuiStepLabel-root .Mui-active": {
                  color: theme.palette.secondary.dark,
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 700,
                },
              }}
            >
              <StepLabel StepIconComponent={"p"}>{label}</StepLabel>
            </Step>
          );
        })}
      </MuiStepper>
    </Box>
  );
};

export default Stepper;
