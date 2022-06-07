import React from "react";
import { Button } from "@mui/material";
import theme, { Colors } from "../../../theme/theme";

export interface IButtonProps {
  variantSize?: "verySmall" | "small" | "medium" | "large" | "text";
  name?: string;
  variant?: "contained" | "outlined" | "text";
  disabled?: true | false;
  size?: any;
  startIcon?: any;
  endIcon?: any;
  onClick?: () => void;
}

const Buttons = ({
  variantSize,
  name,
  variant,
  disabled,
  size,
  onClick,
  startIcon,
  endIcon,
}: IButtonProps) => {
  let temp: any;
  if (variantSize === "small") {
    temp = {
      "&.MuiButton-sizeSmall": {
        width: "122px",
        height: "42px",
        boxShadow: "none",
        borderRadius: "8px",
        padding: "11px 8px 11px 8px",
        textTransform: "none",
      },
    };
  } else if (variantSize === "medium") {
    temp = {
      "&.MuiButton-sizeMedium": {
        width: "222px",
        height: "42px",
        boxShadow: "none",
        borderRadius: "8px",
        padding: "16px 8px 16px 8px",
        textTransform: "none",
        fontWeight: 600,
        fontSize: "16px"
      },
    };
  } else if (variantSize === "large") {
    temp = {
      "&.MuiButton-sizeLarge": {
        backgroundColor: disabled ? Colors.light_blue : "",
        color: Colors.white,
        width: "334px",
        height: "42px",
        boxShadow: "none",
        borderRadius: "8px",
        padding: "16px 8px 16px 8px",
        textTransform: "none",
        fontSize: "16px",
      },
    };
  } else if (variantSize === "verySmall") {
    temp = {
      "&.MuiButton-sizeSmall": {
        padding: `${theme.spacing(0.75)} ${theme.spacing(2)}`,
        fontSize: "16px",
        width: "108px",
        height: "32px",
        backgroundColor: Colors.white,
        color: theme.palette.primary.dark,
        textTransform: "none",
        boxShadow: "none",
        borderRadius: "8px",
      },
    };
  } else if (variantSize === "text") {
    temp = {
      "&.MuiButton-sizeMedium": {
        height: "20px",
        color: name === "Cancel" ? "#FC5C5C" : "",
        textTransform: "none",
        fontSize: name === "Edit" ? "14px" : "16px",
        fontWeight: name === "Edit" ? 500 : 600,
      },
    };
  }
  return (
    <>
      <Button
        sx={temp}
        variant={variant}
        name={name}
        disabled={disabled}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
      >
        {name}
      </Button>
    </>
  );
};

export default Buttons;
