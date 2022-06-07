import { Grid } from "@mui/material";
import React from "react";
import HeaderLogo from "../../components/molecules/HeaderLogo";
import OrderPlacedMol from "../../components/molecules/OrderPlacedComponent";
import paymentSuccess from "../../../public/assets/images/paymentsuccess.svg";
import Image from "../../components/atoms/Image/index";
import Buttons from "../../components/atoms/Button/index";

const styles = {
  header: {
    marginLeft: "90px",
    marginTop: "24px",
    marginBottom: "84px",
  },
  image: {
    marginLeft: "214px",
    marginRight: "144px",
    marginBottom: "99px",
    marginTop: "144px",
    height: '540px'
  },
  footer: {
    boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.06)",
    bottom: "0",
    width: "100%",
    maxheight: "70px",
    display: 'flex'
  },
  button1: {
    marginTop: "14px",
    marginRight: '20px'
  },
  button2: {
    marginTop: "14px",
    marginRight: '90px'
  },
  main: {
    width: "100%",
  },
};

const OrderPlaced = () => {
  const onClick = () => {
    location.href = "/track-order";
  };

  const homeButtonClick = () => {
    location.href = "/";
  };

  return (
    <>
      <Grid container sx={styles.main}>
        <Grid item style={styles.header}>
          <HeaderLogo variant={"heading5"} />
        </Grid>

        <Grid item style={styles.image}>
          <Image src={paymentSuccess} />
        </Grid>

        <Grid item sx={{ marginTop: "144px" }}>
          <OrderPlacedMol />
        </Grid>

        <Grid item container justifyContent="flex-end">
            <Grid item style={styles.button1}>
              <Buttons
                variant="outlined"
                name="Back to Home"
                onClick={homeButtonClick}
              />
            </Grid>
            <Grid item style={styles.button2}>
              <Buttons
                variant="contained"
                name="Track Your Order"
                onClick={onClick}
              />
            </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderPlaced;
