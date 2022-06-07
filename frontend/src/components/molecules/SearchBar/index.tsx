import {
  Input as MuiInput,
  InputAdornment,
  ButtonBase,
  Grid,
  styled,
} from "@mui/material";
import Image from "../../atoms/Image";
import Close from "../../../../public/assets/images/close-searchbar.svg";
import Search from "../../../../public/assets/images/search-searchbar.svg";
import theme from "../../../theme/theme";
import React from "react";

const StyledInput = styled(MuiInput)({
  width: "1186px",
  height: "40px",
  borderRadius: "8px",
  border: `1px solid ${theme.palette.grey[300]}`,
  outline: 0,
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
  padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
});
const StyledGrid = styled(Grid)({
  width: "1186p",
  height: "40px",
  borderRadius: "8px",
  border: `1px solid ${theme.palette.grey[300]}`,
  outline: 0,
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
  padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
  position: "absolute",
  background: "#FFFFFF",
  zIndex: 2000,
});
const StyledImage = styled(Image)({
  marginRight: `${theme.spacing(2)}`,
});

export interface SearchBarProps {
  placeholder?: string;
}
const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <Grid position="relative">
      <StyledInput
        placeholder={placeholder}
        autoFocus
        startAdornment={
          <InputAdornment position="start">
            <StyledImage src={Search} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end" style={{ cursor: "pointer" }}>
            <ButtonBase>
              <StyledImage src={Close} />
            </ButtonBase>
          </InputAdornment>
        }
        disableUnderline
      />
    </Grid>
  );
};

export default SearchBar;
