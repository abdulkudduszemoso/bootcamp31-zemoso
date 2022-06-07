import React from "react";
import HeaderLogo from "../../components/molecules/HeaderLogo";
import Stepper from "../../components/molecules/Stepper-BreadCrumb/index";
import BackIcon from "../../../public/assets/images/back.svg";
import StepperBottomContent from "../../components/molecules/StepperBottomContent/index";
import Image from "../../components/atoms/Image/index";
import BookingTestTemplate from "../../components/templates/BookingTemplate";
import Buttons from "../../components/atoms/Button/index";

import TestInfoMainCard from "../../components/molecules/TestInfoMainCard";




const TestInfoPage = () => {
  const navigateToHome = () => {
    location.href = '/'
  }

  const navigateToAddPatients = () => {
    location.href = '/add-patient'
  }

  return (
    <>
      <BookingTestTemplate
        header={<HeaderLogo variant={"heading5"} />}
        body={<TestInfoMainCard />}
        backButton={
          <Buttons
            name="Back"
            variantSize="medium"
            startIcon={<Image src={BackIcon} />}
            onClick={navigateToHome}
          />
        }
        stepper={<Stepper activeIndex={1} steps={["Home", "Covid RTPCR"]} />}
        footer={
          <StepperBottomContent
            tab="primary"
            buttonName="Add Patient"
            onClickButton={navigateToAddPatients}
          ></StepperBottomContent>
        }
        xsBackButton = {5}
        xsStepper = {6}
      />
    </>
  );
};

export default TestInfoPage;
