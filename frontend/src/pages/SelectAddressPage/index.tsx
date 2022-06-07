import React from "react";
import BookingTestTemplate from "../../components/templates/BookingTemplate";
import BackIcon from "../../../public/assets/images/back.svg";
import SelectAddressList from "../../components/organisms/SelectAddressList";
import Buttons from "../../components/atoms/Button/index";
import HeaderLogo from "../../components/molecules/HeaderLogo";
import StepperBottomContent from "../../components/molecules/StepperBottomContent/index";
import Image from "../../components/atoms/Image/index";
import { getAllAddress } from "./hook";
import Stepper from "../../components/molecules/Stepper-BreadCrumb/index";

const SelectAddressPage = () => {
  const addresses = getAllAddress();
  const handleClick = () => {
    location.href = "/review-order";
  };

  const handleBackClick = () => {
    location.href = '/add-address'
  };

  return (
    <BookingTestTemplate
      header={<HeaderLogo variant={"heading5"} />}
      stepper={
        <Stepper
          activeIndex={2}
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
      body={<SelectAddressList addresses={addresses} />}
      footer={
        <StepperBottomContent
          tab="primary"
          buttonName="Save Address"
          onClickButton={handleClick}
        ></StepperBottomContent>
      }
    />
  );
};

export default SelectAddressPage;
