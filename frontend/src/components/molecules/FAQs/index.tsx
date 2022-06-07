import React from "react";
import { Grid } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const sxStyles = {
  container: {
    width: "1186px",
    height: "316px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
  question: {
    width: "1186px",
    height: "64px",
    justifyContent: "space-between",
    display: "flex",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    padding: "20px",
    boxShadow: "0px 0px 26px rgba(233, 232, 237, 0.5)",
  },
  downArrow: {
    width: "12px",
    height: "6px"
  }
};

const FAQs = () => {
  return (
    <>
      <Grid container sx={sxStyles.container}>
        <TypographyComponent
          variant="heading1"
          color="secondary.dark"
          text="Frequently Asked Questions"
        />
        <Grid>
          <Grid sx={sxStyles.question}>
            <TypographyComponent
              variant="body2"
              color="secondary.main"
              text="How soon can I get the report?"
            />
            <KeyboardArrowDownIcon />
          </Grid>
          <Grid sx={sxStyles.question}>
            <TypographyComponent
              variant="body2"
              color="secondary.main"
              text="How needs Full Body Check-up?"
            />
            <KeyboardArrowDownIcon />
          </Grid>
          <Grid sx={sxStyles.question}>
            <TypographyComponent
              variant="body2"
              color="secondary.main"
              text="Can Children take this test?"
            />
            <KeyboardArrowDownIcon />
          </Grid>
          <Grid sx={sxStyles.question}>
            <TypographyComponent
              variant="body2"
              color="secondary.main"
              text="How many persons can book appointment from one account?"
            />
            <KeyboardArrowDownIcon />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FAQs;
