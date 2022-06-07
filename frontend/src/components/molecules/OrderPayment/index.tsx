import { Grid, Typography } from "@mui/material";
import React from "react";
import Buttons from "../../atoms/Button/index";
import AddIcon from "../../../../public/assets/images/add.svg";
import PaymentCard from "../PaymentCard";
import PaymentOptions from "../PaymentOptions";
import Image from "../../atoms/Image";

interface IOrderPaymentProps {
  cardName: string;
  cardNumber: string;
  cardHolderName: string;
  cardExpiry: string;
}

const sxStyles = {
  mainGrid: {
    padding: "20px",
    height: "562px",
  },
  cardDetailsText: {
    marginLeft: "280px",
  },
  paymentOptions: {
    marginLeft: "20px",
    marginTop: '1rem'
  },
};

const OrderPayment = (props: IOrderPaymentProps) => {
  return (
    <Grid sx={sxStyles.mainGrid} flexDirection="row" alignItems={"center"}>
      <Grid item sx={{ display: "flex" }}>
        <Grid item>
          <Typography variant="subtitle1">Card Details</Typography>
        </Grid>
        <Grid item sx={sxStyles.cardDetailsText}>
          <Buttons name="Add Card" startIcon={<Image src={AddIcon} />} />
        </Grid>
      </Grid>
      <Grid item>
        <PaymentCard
          cardName={props.cardName}
          cardNumber={props.cardNumber}
          cardHolderName={props.cardHolderName}
          cardExpiry={props.cardExpiry}
        />
      </Grid>
      <Grid item sx={sxStyles.paymentOptions}>
        <PaymentOptions />
      </Grid>
    </Grid>
  );
};

export default OrderPayment;
