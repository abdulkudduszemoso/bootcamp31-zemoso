import { Grid, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";

export interface BookingTestTemplate {
  header?: React.ReactNode;
  body?: React.ReactNode;
  backButton?: React.ReactNode;
  stepper?: React.ReactNode;
  footer?: React.ReactNode;
  xsBackButton? : any;
  xsStepper? : any
}

const Header = styled(Grid)({
  marginLeft: "6.875rem",
  marginTop: "1.5rem",
  marginBottom: "1.5rem"
});

const sxStyles = {
  mainGrid: {
    display: "flex",
    marginLeft: "2.5rem",
  },
  stepper: {
    marginTop: `${theme.spacing(0.5)}`,
    marginBottom: `${theme.spacing(3.75)}`,
  },
  content: {
    height: "41.875rem",
    overflowY: 'auto'
  },
};

const Booking = (props: BookingTestTemplate) => {
  const { header, body, backButton, stepper, footer, xsBackButton, xsStepper } = props;
  return (
    <>
      <Header>{header}</Header>
      <Grid sx={sxStyles.mainGrid} item container>
        <Grid item xs={xsBackButton ? xsBackButton : 3.5}>{backButton}</Grid>
        <Grid item xs={xsStepper ? xsStepper : 5}>
          {stepper}
        </Grid>
      </Grid>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        sx={sxStyles.content}
      >
        {body}
      </Grid>

      {footer}
    </>
  );
};

export default Booking;
