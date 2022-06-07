import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";
import { makeStyles } from "@mui/styles";

import Vector from "../../../../public/assets/icons/Vector.svg";
import {orderPlacedConst} from "../../../utils/constants"

const sxStyles = {
  
  sty1:{
    marginTop:"24px",
    marginLeft:"24px",
    marginRight:"24px",
    marginBottom:"41px"
    
  },
  sty2:{
    
    marginLeft:"25.33px",
    marginBottom:"8px"
    
  },
  sty3:{
      marginLeft:"24px"
  },
  sty4:{
    width: "482px",
    height: "245px",
    boxShadow: "0px 0px 26px rgba(233, 232, 237, 0.5)",
    background: "#FFFFFF"
  }
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "20px",
    gap: "6px",
  },
  text: {
    lineHeight: "20px",
  },
});

const OrderPlaced = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid container style={sxStyles.sty4} flexDirection="column">
        <Grid style={sxStyles.sty1}>
          <Typography variant="heading4" color={theme.palette.secondary.dark}>{orderPlacedConst.cons1}</Typography>
        </Grid>

        <Grid style={sxStyles.sty2}>
          <div className={classes.root}>
            <img src={Vector} alt="logo"></img>
            <Typography variant="heading2" color={theme.palette.primary.dark}>
              {orderPlacedConst.const2}
            </Typography>
          </div>
        </Grid>

        <Grid style={sxStyles.sty3}>
            <Typography variant="body5" color={theme.palette.secondary.main}>
            {orderPlacedConst.const3}
            </Typography>
        </Grid>

      </Grid>
    </Grid>
  );
};

export default OrderPlaced;
