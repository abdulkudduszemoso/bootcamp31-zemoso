import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Buttons from "../../atoms/Button/index";
import { makeStyles } from "@mui/styles";
import React from 'react';

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "70px",
    background: "#FFFFFF",
    boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.06)",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
  box: {
    marginLeft: "102px",
  },
  stack: {
    alignItems: "center",
    marginRight: "90px",
  },
});
export type StepperBottomContentProps = {
  tab: string;
  totalNumberOfPatientsSelected?: string;
  labName?: string;
  testPrice?: string;
  totalNumberOfTestsSelected?: string;
  appointmentTime?: string;
  buttonName: string;
  onClickButton: any;
};

const StepperBottomContent: React.FC<StepperBottomContentProps> = ({
  tab,
  totalNumberOfPatientsSelected,
  labName,
  testPrice,
  totalNumberOfTestsSelected,
  appointmentTime,
  buttonName,
  onClickButton
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Box className={classes.box}>
          {tab !== "backToHome" && (
            <Buttons variant="text" name="Cancel" variantSize="text"></Buttons>
          )}
        </Box>
        <Stack className={classes.stack} direction="row" spacing={3}>
          {tab === "selectPatientTab" && (
            <Typography variant="heading2">
              {`${totalNumberOfPatientsSelected} Patient Selected`}
            </Typography>
          )}
          {tab === "selectLabTab" && (
            <Box sx={{ display: "block" }}>
              <Typography variant="body6">{labName}</Typography>
              <Box sx={{ display: "flex", gap: 0.5 }}>
                {" "}
                <Typography variant="heading2">{testPrice} </Typography>
                <Typography variant="body6">{totalNumberOfTestsSelected}</Typography>
              </Box>
            </Box>
          )}
          {tab === "selectAppointmentTab" && (
            <Typography variant="heading2">{appointmentTime}</Typography>
          )}
          <Buttons name={buttonName} variant="contained" variantSize={'medium'} onClick={onClickButton} />
        </Stack>
      </CardContent>
    </Card>
  );
};
export default StepperBottomContent;
