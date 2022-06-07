import { Typography } from "@mui/material";
import * as React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "560px",
    height: "132px",
  },
});

const BulletPoints: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ul>
        <li>
          <Typography variant="body5" color="secondary.main">
            This package covers nasal/oral swab test & same day pickup. It
            indicates if you currently have the COVID-19 infection.
          </Typography>
        </li>
        <li>
          <Typography variant="body5" color="secondary.main">
            Disclaimer 1:For travelling purposes, please ensure the name is as
            per govt ID proof.
          </Typography>
        </li>
        <li>
          <Typography variant="body5" color="secondary.main">
            Disclaimer 2: Vaccination status will be required and Covid Positive
            Reports will be made available as per local
          </Typography>
        </li>
        <li>
          <Typography variant="body5" color="secondary">
            Municipal corporation guidelines.
          </Typography>
        </li>
      </ul>
    </div>
  );
};
export default BulletPoints;
