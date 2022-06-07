import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";
import Image from "../../atoms/Image";
import User from "../../../../public/assets/images/avatar.svg";
import User1 from "../../../../public/assets/images/avatar1.svg";
import User2 from "../../../../public/assets/images/avatar2.svg";
import Loader from "../../atoms/Loader";

const TestimonialCard = () => {
  let titleStyle: any;
  let cardStyle: any;
  let cardContent: any;
  let insideCard: any;
  let insideCard1: any;
  let typo1: any;
  let typo2: any;
  let typo3: any;
  let displayCard: any;
  let displayCardRow: any;

  displayCardRow = { display: "flex", flexDirection: "row" };

  displayCard = { display: "flex", flexDirection: "column" };

  cardStyle = {
    variant: "contained",
    backgroundColor: theme.palette.primary.dark,
    width: "1366px",
    height: "384px",
  };

  titleStyle = {
    marginLeft: "85px",
    marginTop: "60px",
    fontWeight: 700,
    fontSize: "24px",
    color: "#FFFFFF",
  };

  cardContent = {
    display: "flex",
    flexDirection: "row",
    marginTop: "-40px",
    columnGap: "20px",
  };

  insideCard = {
    display: "flex",
    flexDirection: "column",
    marginTop: "32px",
    width: "352px",
    height: "152px",
    marginLeft: "90px",
    padding: "20px",
    borderRadius: "8px",
  };

  insideCard1 = {
    display: "flex",
    flexDirection: "column",
    marginTop: "32px",
    width: "352px",
    height: "152px",
    padding: "20px",
    borderRadius: "8px",
  };

  typo1 = {
    marginTop: "-5px",
    marginLeft: "18px",
    fontWeight: "500",
    fontSize: "14px",
    color: "#5A5766",
  };

  typo2 = {
    marginLeft: "-50px",
    fontWeight: "500",
    fontSize: "14px",
    color: "#757380",
  };

  typo3 = {
    marginTop: "10px",
    marginLeft: "-50px",
    fontWeight: "400",
    fontSize: "14px",
    color: "#5A5766",
  };

  return (
    <>
      <Card sx={cardStyle}>
        <CardContent sx={displayCard} data-testid="testominal-card">
          <Typography sx={titleStyle}>Customer Testimonials</Typography>
        </CardContent>
        <CardContent sx={cardContent} data-testid="card1">
          <Card sx={insideCard}>
            <CardContent sx={displayCardRow}>
              <Image
                src={User}
                width={32}
                height={32}
                // data-testid="image1"
              />
              <Typography sx={typo1} data-testid="text1">
                Abby
              </Typography>
              <CardContent sx={displayCard}>
                <Typography sx={typo2} data-testid="text2">
                  San Jose, CA
                </Typography>

                <Typography sx={typo3} data-testid="text3">
                  “Very friendly and professional. Loved the follow-up and
                  progress calls”
                </Typography>
              </CardContent>
            </CardContent>
          </Card>

          <Card sx={insideCard1}>
            <CardContent sx={displayCardRow}>
              <Image src={User1} width={32} height={32} />
              <Typography sx={typo1} data-testid="text4">
                Abby
              </Typography>
              <CardContent sx={displayCard}>
                <Typography sx={typo2} data-testid="text5">
                  San Jose, CA
                </Typography>

                <Typography sx={typo3} data-testid="text6">
                  “Very friendly and professional. I would like to suggest
                  Zemoso diagnostics to my friends and family.”
                </Typography>
              </CardContent>
            </CardContent>
          </Card>

          <Card sx={insideCard1}>
            <CardContent sx={displayCardRow}>
              <Image src={User2} width={32} height={32} />
              <Typography sx={typo1} data-testid="text7">
                Abby
              </Typography>
              <CardContent sx={displayCard}>
                <Typography sx={typo2} data-testid="text8">
                  San Jose, CA
                </Typography>

                <Typography sx={typo3} data-testid="text9">
                  “Very friendly and professional. Loved the follow-up and
                  progress calls”
                </Typography>
              </CardContent>
            </CardContent>
          </Card>
        </CardContent>
        <Grid
          sx={{
            color: theme.palette.primary.dark,
            marginLeft: "663px",
            marginBottom: "60px",
          }}
        >
          <Loader variant="secondary"></Loader>
        </Grid>
      </Card>
    </>
  );
};

export default TestimonialCard;
