import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import theme from "../../../theme/theme";

export type CheckBoxProps = {
  label?: string;
  size?: "small" | "medium";
  checked?: boolean;
  onClickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const CheckBox: React.FC<CheckBoxProps> = ({ label, size, checked, onClickEvent }) => {
  return (
    <div>
      <Checkbox
        size={size}
        sx={{ "&.Mui-checked": { color: theme.palette.primary.light } }}
        onClick={onClickEvent}
        checked={checked}
        data-testid="checkbox"
      ></Checkbox>
      <Typography variant="body5" color="secondary.main">
        {label}
      </Typography>
    </div>
  );
};

export default CheckBox;
