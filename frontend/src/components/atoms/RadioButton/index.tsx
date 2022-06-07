import * as React from "react";
import { Radio, Typography } from "@mui/material";
import theme from "../../../theme/theme";

export type RadioButtonProps = {
  name?: string;
  className?: string;
  size?: "small" | "medium";
  value?: string;
  label?: string;
};
const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  className,
  size,
  value,
  label,
}) => {
  return (
    <div data-testid="radio-button">
      <Radio
        name={name}
        sx={{ "&.Mui-checked": { color: theme.palette.primary.light } }}
        className={className}
        size={size}
        value={value}
      />
      <Typography variant="body5" color="secondary.dark">
        {label}
      </Typography>
    </div>
  );
};

export default RadioButton;
