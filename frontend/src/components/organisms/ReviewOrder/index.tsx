import { Avatar, Card, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Altos from "../../../../public/assets/images/lab.svg";
import User from "../../../../public/assets/images/user.svg";
import Calendar from "../../../../public/assets/images/calendar.svg";
import ImageWithTypography from "../../molecules/ImageTypography";
import trashIcon from "../../../../public/assets/images/trash-2.svg";
import Home from "../../../../public/assets/images/home1.svg";
import theme from "../../../theme/theme";
import { makeStyles } from "@mui/styles";

export type ReviewOrderProps = {
  title?: any;
  labName?: string;
  totalCost?: number;
  userName?: string;
  userDetails?: string;
  testName?: string;
  selectedSlot?: string;
  reportDuration?: string;
  address?: string;
  houseNumber?: string;
};
const useStyles = makeStyles({
  root: {
    width: "583px",
    height: "700px",
  },
  labCard: {
    display: "flex",
    flexDirection: "row",
    width: "434px",
    height: "52px",
    marginTop: "24px",
    marginLeft: "75px",
    columnGap: "14.56px",
    borderRadius: "8px",
    marginBottom: "12px",
    background: "#FFFFFF",
    border: "1px solid #E9E8ED",
  },
  testPriceCard: {
    display: "flex",
    flexDirection: "column",
    width: "434px",
    height: "104px",
    marginLeft: "75px",
    marginTop: "12px",
    borderRadius: "12px",
    border: "1px solid #E9E8ED",
    boxShadow: "0px 0px 12px rgba(233, 232, 237, 0.53)",
  },
  patientCard: {
    display: "flex",
    flexDirection: "column",
    width: "434px",
    height: "194px",
    marginLeft: "75px",
    marginTop: "17px",
    borderRadius: "12px",
    border: " 1px solid #E9E8ED",
  },
  timeCard: {
    display: "flex",
    flexDirection: "row",
    width: "434px",
    height: "92px",
    marginLeft: "75px",
    marginTop: "8px",
    borderRadius: "12px",
    rowGroup: "10px",
    border: " 1px solid #E9E8ED",
  },
  addressCard: {
    width: "434px",
    height: "112px",
    marginLeft: "75px",
    marginTop: "8px",
    borderRadius: "12px",
    border: " 1px solid #E9E8ED",
  },
});
const ReviewOrder: React.FC<ReviewOrderProps> = ({
  labName,
  totalCost,
  userName,
  userDetails,
  testName,
  selectedSlot,
  reportDuration,
  address,
  houseNumber,
}) => {
  const classes = useStyles();
  let AvatarStyle = {
    width: "44px",
    height: "44px",
    align: "center",
    marginTop: "4px",
    marginLeft: "6px",
    backgroundPosition: "top center",
  };

  let typo1 = { marginTop: "-13px", marginLeft: "333px" };
  let typo2 = {
    marginLeft: "12px",
    marginTop: "12px",
  };

  let typo3 = {
    marginLeft: "380px",
    marginTop: "-18px",
  };

  let typo4 = {
    marginTop: "12px",
    marginRight: "10px",
  };

  let typo5 = {
    marginLeft: "380px",
    marginTop: "-18px",
  };
  let typo8 = {
    marginTop: "12px",
    textTransform: "none",
  };
  let typo7 = {
    marginLeft: "331px",
    marginTop: "-18px",
  };

  let typo6 = { marginLeft: "30px", marginTop: "-18px" };

  let typo9 = { marginTop: "5px", marginRight: "10px" };

  let gridStyle = {
    marginLeft: "21px",
    marginTop: "19px",
  };

  let gridStyle2 = { marginLeft: "320px", marginTop: "-24px" };

  return (
    <>
      <div className={classes.root}>
        <Card className={classes.labCard}>
          <Avatar variant="circular" src={Altos} sx={AvatarStyle}></Avatar>
          <Typography
            variant="heading2"
            sx={{ marginTop: "16px", textTransform: "none" }}
          >
            {labName}
          </Typography>
        </Card>

        <Card className={classes.testPriceCard}>
          <Typography
            variant="body5"
            color={theme.palette.secondary.main}
            sx={typo2}
          >
            Item Total
          </Typography>
          <Typography
            variant="body5"
            color={theme.palette.secondary.main}
            sx={typo3}
          >
            ${totalCost}
          </Typography>
          <Typography
            variant="body5"
            color={theme.palette.secondary.main}
            sx={typo2}
          >
            Discount
          </Typography>
          <Typography variant="body5" color="green" sx={typo3}>
            -$100
          </Typography>
          <Typography
            variant="body5"
            color={theme.palette.secondary.dark}
            sx={typo2}
          >
            Grand Total
          </Typography>
          <Typography
            variant="heading5"
            color={theme.palette.secondary.dark}
            sx={typo5}
          >
            ${totalCost! - 100}
          </Typography>
        </Card>

        <Card className={classes.patientCard}>
          <Grid sx={gridStyle}>
            <ImageWithTypography
              src={User}
              variant="patient"
              title="Patient Details(1)"
            ></ImageWithTypography>
            <Grid
              sx={{
                width: "400px",
                heigth: "0px",
                color: "#E9E8ED",
                align: "left",
              }}
            >
              <hr />
            </Grid>
            <Typography
              variant="body1"
              color={theme.palette.secondary.dark}
              sx={typo8}
            >
              {userName}
            </Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body3"
                color={theme.palette.secondary.light}
                sx={typo7}
              >
                {userDetails}
              </Typography>
              <Typography
                variant="body3"
                color={theme.palette.secondary.dark}
                sx={{ marginTop: "12px" }}
              >
                {testName}
              </Typography>
              <Typography
                variant="body4"
                color={theme.palette.secondary.dark}
                sx={typo1}
              >
                ${totalCost}
              </Typography>
            </div>

            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "375px",
                marginTop: "-25px",
              }}
            >
              <IconButton>
                <img src={trashIcon}></img>
              </IconButton>
            </Grid>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body3"
                color={theme.palette.secondary.light}
                sx={{
                  marginTop: "4px",
                }}
              >
                1 Test
              </Typography>
              <Typography variant="body1" color="green" sx={typo8}>
                {reportDuration}
              </Typography>
            </div>
          </Grid>
        </Card>

        <Card className={classes.timeCard}>
          <Grid sx={gridStyle}>
            <ImageWithTypography
              src={Calendar}
              variant="patient"
              title="Time Slot Selected"
            ></ImageWithTypography>
            <Grid sx={gridStyle2}>
              <Typography
                variant="body6"
                color={theme.palette.primary.main}
                sx={{
                  "&.MuiTypography-root": {
                    marginLeft: "30px",
                  },
                }}
              >
                Change
              </Typography>
            </Grid>
            <Grid
              sx={{
                width: "400px",
                heigth: "0px",
                color: "#E9E8ED",
                align: "left",
              }}
            >
              <hr />
            </Grid>
            <Typography
              variant="body6"
              color={theme.palette.secondary.dark}
              sx={typo4}
            >
              {selectedSlot}
            </Typography>
          </Grid>
        </Card>

        <Card className={classes.addressCard}>
          <Grid sx={gridStyle}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                columnGap: "12px",
              }}
            >
              <img src={Home} width={20} height={20}></img>
              <Typography
                variant="body6"
                color={theme.palette.secondary.light}
                sx={typo6}
              >
                Address Selected (Home)
              </Typography>

              <Grid sx={gridStyle2}>
                <Typography
                  variant="body6"
                  color={theme.palette.primary.main}
                  sx={{
                    "&.MuiTypography-root": {
                      marginLeft: "30px",
                    },
                  }}
                >
                  Change
                </Typography>
              </Grid>
            </div>
            <Grid
              sx={{
                width: "400px",
                heigth: "0px",
                color: "#E9E8ED",
                align: "left",
              }}
            >
              <hr />
            </Grid>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body6"
                color={theme.palette.secondary.dark}
                sx={typo9}
              >
                {address}
              </Typography>
              <Typography
                variant="body6"
                color={theme.palette.secondary.dark}
                sx={typo9}
              >
                {houseNumber}
              </Typography>
            </div>
          </Grid>
        </Card>
      </div>
    </>
  );
};

export default ReviewOrder;
