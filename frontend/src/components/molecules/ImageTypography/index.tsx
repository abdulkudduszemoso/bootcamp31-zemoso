import React from "react";
import Image from "../../atoms/Image";
import { Typography, Grid } from "@mui/material";
import theme from "../../../theme/theme";

type imageWithTypographyProps = {
  src?: any;
  variant?: string;
  title?: string;
  fontWeightHigh?: boolean;
};

const ImageWithTypography = ({
  src,
  variant,
  title,
  fontWeightHigh,
}: imageWithTypographyProps) => {
  let temp2: any;

  if (variant === "footer") {
    temp2 = {
      marginLeft: "4px",
      variant: theme.typography.caption,
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "16px",
      color: "#FFFFFF",
    };
  } else if (variant === "header") {
    temp2 = {
      marginLeft: "6px",
      variant: theme.typography.caption,
      fontSize: "14px",
      fontWeight: fontWeightHigh ? "700" : "500",
      lineHeight: "16px",
      color: "#6B4DE0",
    };
  } else if (variant === "star") {
    temp2 = {
      marginLeft: "5.5px",
      variant: theme.typography.caption,
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "20px",
      color: theme.palette.textColors?.mediumEmphasis,
    };
  } else if (variant === "calendar") {
    temp2 = {
      marginLeft: "8.6px",
      variant: theme.typography.caption,
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "20px",
      color: theme.palette.success.main,
    };
  } else if (variant === "patient") {
    temp2 = {
      marginLeft: "8.6px",
      variant: theme.typography.caption,
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "18px",
      color: "#757380",
    };
  } else if (variant === "back") {
    temp2 = {
      marginLeft: '13px',
      variant: theme.typography.heading2,
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: "20px",
      color: theme.palette.primary.main
    }
  }

  return (
    <Grid
      container
      sx={{
        justifyContent: "left",
        alignItems: "center",
        position: "left",
      }}
    >
      <Image src={src} alt="img" />

      <Typography sx={temp2}>{title}</Typography>
    </Grid>
  );
};

export default ImageWithTypography;
