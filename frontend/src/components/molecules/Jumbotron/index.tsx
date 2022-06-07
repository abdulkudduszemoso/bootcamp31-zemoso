import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../../atoms/Image";
import Family from "../../../../public/assets/images/family.png";
import { jumbotron } from "../../../utils/constants";
import theme, { Colors } from "../../../theme/theme";
import Buttons from "../../atoms/Button/index";

const sxStyles = {
  container: {
    width: "1186px",
    height: "12.875rem",
    color: Colors.white,
    borderRadius: "12px",
    backgroundColor: "#4d1c8c",
    padding: `${theme.spacing(5)} ${theme.spacing(6)}`,
  },
  item: {
    width: "269px",
    height: "180px",
    marginTop: `${theme.spacing(-3.375)}`,
    marginBottom: `${theme.spacing(-3.375)}`,
  },
  typo: {
    marginBottom: `${theme.spacing(0.5)}`,
  },
};

const Jumbotron = () => {
  return (
    <>
      <Grid container sx={sxStyles.container}>
        <Grid
          container
          flexDirection="column"
          justifyContent="space-between"
          width="781px"
        >
          <Grid item sx={{width: '80%'}}>
            <Typography variant="heading1" sx={sxStyles.typo}>
              {jumbotron.TEXT1}
            </Typography>
            <Typography variant="body1">{jumbotron.TEXT2}</Typography>
          </Grid>
          <Buttons
            variant="contained"
            size="small"
            name={jumbotron.BUTTON}
            variantSize="verySmall"
          />
        </Grid>

        <Grid item sx={sxStyles.item}>
          <Image src={Family} alt="family" />
        </Grid>
      </Grid>
    </>
  );
};

export default Jumbotron;
