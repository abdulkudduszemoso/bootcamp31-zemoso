import { Grid } from "@mui/material";
import React from "react";
import TypographyComponent from "../../atoms/Typography";
import UserIcon from "../../atoms/UserIcon";

export interface ISecondaryCard {
  src?: any;
  variant: "circular" | "rounded" | "square";
  title: string;
}

const sxStyles = {
  container: {
    width: "385px",
    height: "189px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "row",
    gap: "2px",
    padding: "12px",
    border: "1px solid #F8F8FA",
  },
  item: {
    width: "144px",
    height: "165px",
  },
  details: {
    width: "212px",
    height: "165px",
    display: "flex",
    flexDirection: "column",
    gap: "37px",
  },
  innerDetails: {
    width: "200px",
    height: "112px",
    gap: "8px",
    display: "flex",
    flexDirection: "column",
    marginLeft: "12px",
  },
  viewMore: {
    width: "73px",
    height: "16px",
    marginLeft: "12px",
  },
};

const SecondaryCard = (props: ISecondaryCard) => {
  return (
    <>
      <Grid container sx={sxStyles.container}>
        <Grid sx={sxStyles.item}>
          <UserIcon variant={props.variant} src={props.src} />
        </Grid>
        <Grid sx={sxStyles.details}>
          <Grid item sx={sxStyles.innerDetails}>
            <TypographyComponent
              variant="heading2"
              color="secondary.dark"
              text={props.title}
            />
            <TypographyComponent
              variant="body2"
              color="secondary.main"
              text="Starting from $1299"
            />
            <TypographyComponent
              variant="body3"
              color="secondary.light"
              text="Reports ready in 24 hours"
            />
            <TypographyComponent
              variant="body3"
              color="secondary.light"
              text="42 tests"
            />
          </Grid>
          <Grid sx={sxStyles.viewMore}>
            <TypographyComponent
              variant="heading3"
              color="secondary.light"
              text="View Details"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SecondaryCard;
