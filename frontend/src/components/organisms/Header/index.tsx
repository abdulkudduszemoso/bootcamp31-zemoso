import React from "react";
import { Grid, InputAdornment, TextField } from "@mui/material";
import NavItemList from "../../molecules/NavItemList";
import User from "../../../../public/assets/icons/user.svg";
import ShoppingCart from "../../../../public/assets/icons/shopping-cart.svg";
import MapPin from "../../../../public/assets/icons/map-pin.svg";
import theme from "../../../theme/theme";
import HeaderLogo from "../../molecules/HeaderLogo";

export interface HeaderProps {
    activeItem: string
}

const Header: React.FC<HeaderProps> = ({activeItem}) => {
  const gridStyle2 = {
    width: "23.4375rem",
    height: "1.625rem",
    display: "flex",
    justifyContent: "space-between",
  };

  const gridStyle1 = {
    height: "2.875rem",
    width: "85.375rem",
    display: "flex",
    alignItems: "center",
    padding: `${theme.spacing(0)} ${theme.spacing(11.125)}`,
    justifyContent: "space-between",
    boxShadow: "0px 0px 26px rgba(233, 232, 237, 0.5)",
  };

  const gridStyle3 = {
    width: "163px",
    height: "20px",
  };
  const textfield = {
    width: "282px",
  };
  const inputStyle = {
    paddingLeft: "4px",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
  };

  return (
    <Grid sx={gridStyle1}>
      <Grid sx={gridStyle3}>
        <HeaderLogo variant="body1"></HeaderLogo>
      </Grid>
      <NavItemList
        title1="Home"
        title3="My Appointments"
        title2="Reports"
        activeItem={activeItem}
      />

      <Grid sx={gridStyle2}>
        <TextField
          variant="standard"
          placeholder="Location"
          sx={textfield}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={MapPin} />
              </InputAdornment>
            ),
            style: inputStyle,
          }}
        />
        <img src={User} />
        <img src={ShoppingCart} />
      </Grid>
    </Grid>
  );
};

export default Header;
