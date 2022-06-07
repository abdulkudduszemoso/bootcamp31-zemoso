import React from "react";
import { styled } from "@mui/styles";
import TypographyComponent from "../../atoms/Typography";
import SecondaryCard from "../../molecules/SecondaryCard";
import Arrow from "../../../../public/assets/images/arrow.svg";

export interface ISecondaryCardList {
  src: any[];
  variant: "circular" | "rounded" | "square";
  title: string[];
}

const RootContainer = styled("div")({
  width: "1186px",
  height: "249px",
  gap: "32px",
  display: "flex",
  flexDirection: "column",
});

const SeeMore = styled("div")({
  display: "flex",
  alignSelf: "center",
});

const HeaderContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const CardsContainer = styled("div")({
  display: "flex",
  gap: "17px",
});

const ArrowContainer = styled("div")({
  width: "10px",
  height: "10px",
  alignSelf: "center",
  display: "flex",
  marginLeft: "6px",
});

const SecondaryCardList = (props: ISecondaryCardList) => {
  return (
    <RootContainer>
      <HeaderContainer>
        <TypographyComponent
          variant="heading1"
          color="secondary.dark"
          text="Test you can choose from"
        />
        <SeeMore>
          <TypographyComponent
            variant="body1"
            color="primary.main"
            text="See more"
          />
          <ArrowContainer>
            <img src={Arrow} />
            <img src={Arrow} />
          </ArrowContainer>
        </SeeMore>
      </HeaderContainer>
      <CardsContainer>
        <SecondaryCard
          src={props.src[0]}
          variant={props.variant}
          title={props.title[0]}
        />
        <SecondaryCard
          src={props.src[1]}
          variant={props.variant}
          title={props.title[1]}
        />
        <SecondaryCard
          src={props.src[2]}
          variant={props.variant}
          title={props.title[2]}
        />
      </CardsContainer>
    </RootContainer>
  );
};

export default SecondaryCardList;
