import React from "react";
import Buttons from "../../components/atoms/Button/index";
import Image from "../../components/atoms/Image/index";
import HeaderLogo from "../../components/molecules/HeaderLogo";
import Stepper from "../../components/molecules/Stepper-BreadCrumb/index";
import StepperBottomContent from "../../components/molecules/StepperBottomContent/index";
import BackIcon from "../../../public/assets/images/back.svg";
import BookingTestTemplate from "../../components/templates/BookingTemplate/index";
import ReviewOrder, { ReviewOrderProps } from "../../components/organisms/ReviewOrder/index";
import { PatientDetails } from "../../components/organisms/AddPatient/index";

const ReviewOrderPage = () => {
  const handleClick = () => {
    location.href = "/checkout";
  };

  const handleBackClick = () => {
    location.href = '/address-list';
  }

  const patient: any = JSON.parse(localStorage.getItem('patient')!);
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
    <BookingTestTemplate
      header={<HeaderLogo variant={"heading5"} />}
      stepper={
        <Stepper
          activeIndex={3}
          steps={[
            "Lab Test",
            "Select appointment",
            "Add Address",
            "Review Order",
          ]}
        />
      }
      backButton={
        <Buttons
          name="Back"
          variantSize="medium"
          startIcon={<Image src={BackIcon} />}
          onClick={handleBackClick}
        />
      }
      body={<ReviewOrder {...reviewOrder}  />}
      footer={
        <StepperBottomContent
          tab="primary"
          buttonName="Continue"
          onClickButton={handleClick}
        ></StepperBottomContent>
      }
    />
  );
};

export default ReviewOrderPage;
