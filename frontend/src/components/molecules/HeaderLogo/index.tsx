import * as React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../../../../public/assets/images/logo.png";

export type HeaderLogoProps = {
  variant:
    | "inherit"
    | "button"
    | "overline"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5";
};
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "20px",
    gap: "6px",
  },
  text: {
    lineHeight: "20px",
  },
});

const HeaderLogo: React.FC<HeaderLogoProps> = ({ variant }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={logo} alt="logo"></img>
      <Typography variant={variant} color="primary">
        Zemoso Diagnostics
      </Typography>
    </div>
  );
};

export default HeaderLogo;
