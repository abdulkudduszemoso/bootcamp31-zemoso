import React from "react";
import Buttons from "../../components/atoms/Button/index";
import Image from "../../components/atoms/Image/index";
import HeaderLogo from "../../components/molecules/HeaderLogo";
import Stepper from "../../components/molecules/Stepper-BreadCrumb/index";
import StepperBottomContent from "../../components/molecules/StepperBottomContent/index";
import BackIcon from "../../../public/assets/images/back.svg";
import BookingTestTemplate from "../../components/templates/BookingTemplate/index";
import AddAddress from "../../components/organisms/AddAddress/index";
import { addAddress } from "./hooks";

const AddAddressPage = () => {
  const handleClick = () => {
    const savedAddress = JSON.parse(JSON.parse(
      JSON.stringify(localStorage.getItem("addAddressFormData"))
    ));
    const postData = {
      houseNo: savedAddress["house/flat/blockNumber"],
      area: savedAddress["road/area"],
      zip: parseInt(savedAddress["zipcode"]),
      city: savedAddress["city/state"],
      state: savedAddress["city/state"],
      userId: 1
    };

    addAddress(postData).then((res) => { console.log(res); location.href = '/address-list'})
    .catch((err) => console.log(err));
  };


  const handleBackButtonClick = () => {
    location.href = '/appointment'
  }

  return (
    <BookingTestTemplate
      header={<HeaderLogo variant={"heading5"} />}
      backButton={
        <Buttons
          name="Back"
          variantSize="medium"
          startIcon={<Image src={BackIcon} />}
          onClick={handleBackButtonClick}
        />
      }
      stepper={
        <Stepper
          activeIndex={2}
          steps={[
            "Lab Test",
            "Select appointment",
            "Add Address",
            "Review Order",
          ]}
        ></Stepper>
      }
      body={<AddAddress />}
      footer={
        <StepperBottomContent
          tab="primary"
          buttonName="Save Address"
          onClickButton={() => {handleClick();}}
        ></StepperBottomContent>
      }
    />
  );
};

export default AddAddressPage;
