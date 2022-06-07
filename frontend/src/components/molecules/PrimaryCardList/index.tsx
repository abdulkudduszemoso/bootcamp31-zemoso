import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import Image1 from "../../../../public/assets/images/test.svg";
import Image2 from "../../../../public/assets/images/home2.svg";
import Image3 from "../../../../public/assets/images/labtechnician.svg";
import Image4 from "../../../../public/assets/images/award.svg";
import Image5 from "../../../../public/assets/images/reports.svg";
import Image6 from "../../../../public/assets/images/shield.svg";
import UserIcon from "../../atoms/UserIcon";
import { primaryCardListConst } from "../../../utils/constants";

const primaryCardList = () => {
  let typo: any;
  let outerCard: any;
  let innerCard: any;
  let cardContent: any;
  let typoTitle: any;
  let button1: any;
  let button2: any;
  let box1: any;
  let box2: any;
  let box3: any;
  let box4: any;
  let box5: any;
  let displayStyle: any;

  cardContent = {
    display: "flex",
    flexDirection: "row",
    marginTop: "-40px",
  };
  box1 = {
    marginLeft: "-180px",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    flexDirection: "row",
  };

  box2 = {
    marginLeft: "-135px",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    flexDirection: "row",
  };

  box3 = {
    marginLeft: "-105px",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    flexDirection: "row",
  };

  box4 = {
    marginLeft: "-130px",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    flexDirection: "row",
  };

  box5 = {
    marginLeft: "-90px",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    flexDirection: "row",
  };

  button1 = {
    marginLeft: "70px",
    width: "382px",
    height: "76px",
    marginTop: "32px",
    variant: "contained",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  };

  button2 = {
    marginLeft: "20px",
    width: "382px",
    height: "76px",
    marginTop: "32px",
    variant: "contained",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  };

  typoTitle = {
    marginLeft: "85px",
    marginTop: "60px",
    fontWeight: 700,
    fontSize: "24px",
    color: "#FFFFFF",
  };

  innerCard = {
    display: "flex",
    flexDirection: "row",
    marginTop: "-20px",
  };

  outerCard = {
    variant: "contained",
    backgroundColor: "#4D1C8C",
    width: "1366px",
    height: "356px",
  };

  typo = {
    marginLeft: "24px",
    color: "#757380",
    lineHeight: "20px",
    fontWeight: "500",
    fontSize: "14px",
    textTransform: "none",
  };

  displayStyle = { display: "flex", flexDirection: "column" };
  return (
    <>
      <Card sx={outerCard} data-testid="expand-card">
        <CardContent sx={displayStyle}>
          <Typography sx={typoTitle}>{primaryCardListConst.TITLE}</Typography>

          <CardContent sx={innerCard}>
            <Button sx={button1}>
              <Box sx={box1}>
                <UserIcon variant="circular" src={Image1}></UserIcon>

                <Typography variant="body1" sx={typo}>
                  {primaryCardListConst.TITLE1}
                </Typography>
              </Box>
            </Button>
            <Button sx={button2}>
              <Box sx={box2}>
                <UserIcon variant="circular" src={Image2}></UserIcon>

                <Typography variant="body1" sx={typo}>
                  {primaryCardListConst.TITLE2}
                </Typography>
              </Box>
            </Button>
            <Button sx={button2}>
              <Box sx={box3}>
                <UserIcon variant="circular" src={Image3}></UserIcon>

                <Typography variant="body1" sx={typo}>
                  {primaryCardListConst.TITLE3}
                </Typography>
              </Box>
            </Button>
          </CardContent>

          <CardContent sx={cardContent}>
            <Button sx={button1}>
              <Box sx={box4}>
                <UserIcon variant="circular" src={Image4}></UserIcon>

                <Typography variant="body1" sx={typo}>
                  {primaryCardListConst.TITLE4}
                </Typography>
              </Box>
            </Button>
            <Button sx={button2}>
              <Box sx={box5}>
                <UserIcon variant="circular" src={Image5}></UserIcon>

                <Typography variant="body1" sx={typo}>
                  {primaryCardListConst.TITLE5}
                </Typography>
              </Box>
            </Button>
            <Button sx={button2}>
              <Box sx={box4}>
                <UserIcon variant="circular" src={Image6}></UserIcon>

                <Typography variant="body1" sx={typo}>
                  {primaryCardListConst.TITLE6}
                </Typography>
              </Box>
            </Button>
          </CardContent>
        </CardContent>
      </Card>
    </>
  );
};

export default primaryCardList;
