import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../../atoms/Image";
import UserIcon from "../../../../public/assets/images/user-blue.svg";
import theme from "../../../theme/theme";

interface IAlphaCard {
  patientName: string;
  testName: string;
  address: string;
  cost: string;
}

const AlphaCard = ({
  patientName,
  testName,
  address,
  cost,
}: IAlphaCard) => {
  const sxStyles = {
    mainGrid: {
      display: "flex",
      boxShadow: "0px 0px 26px rgba(233, 232, 237, 0.5)",
      borderRadius: "8px",
    },
    patientInformation: {
      width: "200px",
      marginLeft: "8px",
      marginTop: "0.625rem",
    },
    horizontalLine: {
      width: "334px",
      heigth: "0px",
      color: "#E9E8ED",
      align: "left",
    },
    grid: {
      width: "434px",
      height: "128px",
    },
    image: {
      width: "40px",
      height: "40px",
      marginTop: "0.625rem",
      padding: "5px",
      paddingLeft: "8px",
    },
    address: {
      width: "330px",
      display: "block",
    },
  };

  return (
    <Grid container sx={sxStyles.grid}>
      <Grid sx={sxStyles.mainGrid}>
        <Grid sx={sxStyles.image}>
          <Image src={UserIcon} alt="user" width={20} height={20} />
        </Grid>
        <Grid item sx={sxStyles.patientInformation}>
          <Typography color={theme.palette.secondary.dark}>
            {patientName}
          </Typography>
          <Typography variant="body1" color={theme.palette.secondary.light}>
            {testName}
          </Typography>
        </Grid>
      </Grid>
      <Grid sx={sxStyles.horizontalLine}>
        <hr />
      </Grid>
      <Grid>
        <Typography
          variant="body5"
          noWrap
          color={theme.palette.secondary.main}
          sx={sxStyles.address}
        >
          {address}
        </Typography>
        <Typography variant="body1" color={theme.palette.secondary.dark}>
          Total Amount Paid - {cost}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AlphaCard;
