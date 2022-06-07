import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

interface PrimaryCard {
  text: string;
  src: string;
}

const primaryCard = (props: PrimaryCard) => {
  const StyledCard = styled(Card)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px 20px",
    borderRadius: "8px",
    boxShadow: "none",
  }));

  const StyledCardMedia = styled(CardContent)({});

  const StyledCardContent = styled(CardContent)({});

  return (
    <StyledCard>
      <StyledCardMedia>
        <Avatar variant="circular" src={props.src} alt={"image"} />
      </StyledCardMedia>
      <StyledCardContent>
        <Typography
          children={props.text}
          variant="body1"
          color="secondary.main"
        />
      </StyledCardContent>
    </StyledCard>
  );
};

export default primaryCard;
