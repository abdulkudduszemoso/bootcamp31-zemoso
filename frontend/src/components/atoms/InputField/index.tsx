import React from "react";
import { Input } from "@mui/material";

export interface TextFieldProps {
  placeholder?: string;
  name?: string;
  width?: string;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onblur?:React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}
const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  name,
  width,
  value,
  defaultValue,
  onChange,
  onblur
}) => {
  return (
    <Input
      placeholder={placeholder}
      sx={{ width: width }}
      defaultValue={defaultValue}
      onChange={onChange}
      onBlur={onblur}
      name={name}
      value={value}
      data-testid="text-box"
    />
  );
};

export default TextField;
