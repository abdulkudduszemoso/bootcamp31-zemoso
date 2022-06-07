import {
  Grid,
  RadioGroup,
  Typography,
  FormControlLabel,
  Radio,
} from "@mui/material";
import * as React from "react";
import { makeStyles } from "@mui/styles";
import Paypal from "../../../../public/assets/images/PayPal.svg";
import GooglePay from "../../../../public/assets/images/GooglePay.svg";
import NetBanking from "../../../../public/assets/images/Net Banking.svg";
import theme from "../../../theme/theme";

const useStyles = makeStyles({
  root: {
    width: "434px",
    height: "158px",
  },
  radioButton: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "0px",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginLeft: "14px",
  },
  image: {
    width: "20px",
    height: "18px",
    marginRight: "10px",
  },
});
export const paymentOptions = [
  {
    url: Paypal,
    label: "PayPal",
  },
  {
    url: GooglePay,
    label: "Google Pay",
  },
  {
    url: NetBanking,
    label: "Net Banking",
  },
];
const PaymentOptions: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid item direction="column" className={classes.root}>
      <Typography variant="heading2">Other Payment Options</Typography>
      <RadioGroup>
        {paymentOptions.map((paymentOption, index) => (
          <FormControlLabel
            className={classes.radioButton}
            key={index}
            value={paymentOption.label}
            control={<Radio sx={{ "&.Mui-checked": { color: theme.palette.primary.light } }} />}
            label={
              <Grid item className={classes.item}>
                <img src={paymentOption.url} className={classes.image} />
                <Typography
                  variant="body5"
                  color="secondary.dark"
                  className={classes.label}
                >
                  {paymentOption.label}
                </Typography>
              </Grid>
            }
            labelPlacement="start"
            sx={{ "&.MuiFormControlLabel-root": { marginLeft: "0px" } }}
          />
        ))}
      </RadioGroup>
    </Grid>
  );
};

export default PaymentOptions;
