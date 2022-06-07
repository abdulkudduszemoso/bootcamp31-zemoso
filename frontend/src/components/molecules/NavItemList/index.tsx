import React from "react";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
export type NavItemProps = {
  title1?: string;
  title2?: string;
  title3?: string;
  activeItem?: string;
  handleChange?: any;
};
const NavItemList: React.FC<NavItemProps> = ({
  title1,
  title2,
  title3,
  activeItem,
}) => {
  const [value, setValue] = React.useState(activeItem);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  let item = {
    fontSize: "14px",
    textTransform: "none",
    marginRight: "32px",
    textColor: "#5A5766",
    fontFamily: 'Inter'
  };
  let tab1 = {
    width: "40px",
    minWidth: "40px",
  };
  let tab2 = { width: "53px", minWidth: "53px" };
  let tab3 = {
    padding: "0px",
  };
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        TabIndicatorProps={{
          sx: {
            top: "33px",
          },
        }}
      >
        <Tab value={title1} label={title1} sx={item} style={tab1} onClick={() => {location.href = '/'}} />
        <Tab value={title2} label={title2} sx={item} style={tab2} onClick={() => {location.href = '/reports'}} />
        <Tab value={title3} label={title3} sx={item} style={tab3} />
      </Tabs>
    </Box>
  );
};

export default NavItemList;
