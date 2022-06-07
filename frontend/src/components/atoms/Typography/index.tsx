import * as React from "react";
import { Typography } from "@mui/material";

export type TypographyProps = {
  variant?:
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
    | "body3"
    | "body4"
    | "body5"
    | "body6"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5";
  text?: string;
  color?: string;
};

const TypographyComponent: React.FC<TypographyProps> = ({
  variant,
  text,
  color,
}) => {
  return (
    <Typography variant={variant} color={color}>
      {text}
    </Typography>
  );
};

export default TypographyComponent;
