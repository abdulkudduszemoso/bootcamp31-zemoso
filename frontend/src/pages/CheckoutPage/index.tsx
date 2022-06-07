import { Grid } from "@mui/material";
import React from "react";
import Buttons from "../../components/atoms/Button/index";
import Image from "../../components/atoms/Image/index";
import HeaderLogo from "../../components/molecules/HeaderLogo";
import StepperBottomContent from "../../components/molecules/StepperBottomContent/index";
import BackIcon from "../../../public/assets/images/back.svg";
import BookingTestTemplate from "../../components/templates/BookingTemplate/index";
import ReviewOrder, { ReviewOrderProps } from "../../components/organisms/ReviewOrder/index";
import OrderPayment from "../../components/molecules/OrderPayment/index";
import { postOrders, postReports } from "./hook";
import { PatientDetails } from "../../components/organisms/AddPatient/index";
import {useNavigate} from 'react-router-dom';
import TypographyComponent from "../../components/atoms/Typography/index";



const Body: React.FC = () => {
  const patient: PatientDetails = JSON.parse(localStorage.getItem('patient')!);
  const selectedSlot = `${localStorage.getItem('day')} | ${localStorage.getItem('time')}`
  const storedAddress = JSON.parse(localStorage.getItem('addressDetails')!)

  const reviewOrder: ReviewOrderProps = {
    labName: localStorage.getItem('labName')!,
    totalCost: parseInt(localStorage.getItem('labPrice')!),
    userName: patient.patientName!,
    userDetails: `${patient.relation} | ${patient.gender!.substring(0,1)} | ${patient.dob!}`,
    testName: 'COVID RT-PCR Test',
    selectedSlot: selectedSlot,
    reportDuration: 'E-Reports by 12hrs',
    address: `${storedAddress.houseNo}, ${storedAddress.area}, ${storedAddress.city}, ${storedAddress.zipCode}`
  }

  return (
    <>
      <Grid item sx={{ display: "flex" }}>
        <Grid item>
          <ReviewOrder {...reviewOrder} />
        </Grid>
        <Grid item>
          <OrderPayment
            cardName={"Sample"}
            cardNumber={"1244 1234 1345 3255"}
            cardHolderName={"Yessie"}
            cardExpiry={"02/25"}
          />
        </Grid>
      </Grid>
    </>
  );
};

const CheckoutPage = () => {
  const navigate = useNavigate();

  const BackButton: React.FC = () => {
    return (
      <>
        <Buttons
            name="Back"
            variantSize="medium"
            startIcon={<Image src={BackIcon} />}
            onClick={handleBackClick}
        />
        <div style={{display: 'inline-block', marginLeft: 220}}>
        <TypographyComponent text="Check out" variant="heading4" />
        </div>
      </>
    );
  };

  const handleClick = () => {
    const patient: PatientDetails = JSON.parse(localStorage.getItem('patient')!);
    const storedAddress = JSON.parse(localStorage.getItem('addressDetails')!)

    const addOrder = {
      name: patient.patientName,
      testName: "COVID RT-PCR Test",
      cost: parseInt(localStorage.getItem('labPrice')!),
      address: `${storedAddress.houseNo}, ${storedAddress.area}, ${storedAddress.city}, ${storedAddress.zipCode}`
    };

    localStorage.setItem("orderInfo", JSON.stringify(addOrder));

    const report = {
      labName: localStorage.getItem('labName'),
      testName: 'COVID RT-PCR Test',
      reportStatus: 'upcoming',
      reportDownload: localStorage.getItem('day'),
      reportTime: localStorage.getItem('time'),
      updatedBy: 1
    }

    postReports(report);
  };

  const handleBackClick = () => {
    location.href = 'review-order';
  }

  return (
    <BookingTestTemplate
      header={<HeaderLogo variant={"heading5"} />}
      body={<Body />}
      backButton={<BackButton />}
      footer={
        <StepperBottomContent
          tab="primary"
          buttonName="Pay Now"
          onClickButton={() => { handleClick(); navigate('/order-placed')}}
        ></StepperBottomContent>
      }
    />
  );
};

export default CheckoutPage;
