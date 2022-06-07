import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export interface DatePickerProps {
  label: string;
  intialValue: Date | null;
  onChange: (value: string) => void;
}
const BasicDatePicker = ({ label, intialValue, onChange }: DatePickerProps) => {
  const [value, setValue] = React.useState<Date | null>(intialValue);

  const handleChange = (newValue: any) => {
    setValue(newValue);
    onChange(newValue);
  };
  return (
    <div data-testid="date-picker">
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <DatePicker
      
        disableFuture
        label={label}
        value={value}
        onChange={(newValue) => {
          handleChange(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} variant="standard" fullWidth />
        )}
      />
    </LocalizationProvider>
    </div>
  );
};
export default BasicDatePicker;
