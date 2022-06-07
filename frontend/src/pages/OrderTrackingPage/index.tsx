import { Divider, Grid } from "@mui/material";
import React from "react";
import InfoIcon from "../../../public/assets/images/info.svg";
import Accordion from "../../components/molecules/Accordion";
import AlphaCard from "../../components/molecules/AlphaCard/index";
import HeaderLogo from "../../components/molecules/HeaderLogo";
import TrackOrder from "../../components/organisms/TrackOrder";
import BookingTestTemplate from "../../components/templates/BookingTemplate/index";
import StepperBottomContent from "../../components/molecules/StepperBottomContent";



const sxStyles = {
  divider: {
    marginLeft: "65px",
    marginRight: "60px",
  },
  midBox:{
   overflow: "hidden",
   zoom:"110%"
   
  }
};

const Body = ()=>{
  const dummy={
    name:"",
    testName:"",
    address:"",
    cost:""

  }
  const orderDetails: any = JSON.parse(localStorage.getItem("orderInfo")!)?JSON.parse(localStorage.getItem("orderInfo")!): dummy;
  const patientName = localStorage.getItem("name")

  return (
    <Grid container style={sxStyles.midBox} >
      <Grid item xs={1.75}>

      </Grid>

      <Grid item sx={{marginLeft:'90px', marginTop: '80px'}}>
        <AlphaCard
          patientName={patientName ? patientName: ''}
          testName={orderDetails.testName!}
          address={orderDetails.address!}
          cost={'$'+orderDetails.cost!}
        ></AlphaCard>
        <Accordion
          heading={"Instructions"}
          information={
            "Please don't eat or drink anything other than water for  8 -10 hours prior to the appointment."
          }
          icon={InfoIcon}
        ></Accordion>
      </Grid>
      <Grid item sx={sxStyles.divider}>
        <Divider orientation="vertical"></Divider>
      </Grid>
      <Grid item sx={{ marginTop: '80px'}}>
        <TrackOrder></TrackOrder>
      </Grid>
    </Grid>
  );
}


const OrderTrackingPage = () => {
  const onClick = () => {
    location.href = "/";
  };

return(
<div >
  <BookingTestTemplate
    header={<HeaderLogo variant="heading5" />}
    body={<Body />}
    footer={
        <StepperBottomContent
        tab="backToHome"
        buttonName="Back To Home" onClickButton={onClick}       />
    }
  />
</div>)
  




};
export default OrderTrackingPage;
