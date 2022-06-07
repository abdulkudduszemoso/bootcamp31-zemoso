import React, { useState } from "react";
import Buttons from "../../components/atoms/Button/index";
import Image from "../../components/atoms/Image/index";
import HeaderLogo from "../../components/molecules/HeaderLogo";
import Stepper from "../../components/molecules/Stepper-BreadCrumb/index";
import SelectLabList from "../../components/organisms/SelectLabList/index";
import StepperBottomContent from "../../components/molecules/StepperBottomContent/index";
import BackIcon from "../../../public/assets/images/back.svg";
import BookingTestTemplate from "../../components/templates/BookingTemplate/index";
import { getAllLabs } from "./hook";
import {useNavigate} from 'react-router-dom';

const LabTest = () => {
  const handleClick = () => {
    location.href = "/patient-details";
  };

  const defaultValue = {
    labName: '',
    slotsLeft: 0,
    price: '0',
  };

  const [labDetails, setLabDetails] = useState<any>(defaultValue);

  const [disabled, setDisabled] = useState(true);

  const labList: any = getAllLabs();
  
  const pullData = (activeId: any) => {

    for(let lab of labList) {
        if (lab.labId === activeId) {
            localStorage.setItem("LabId", activeId);
            localStorage.setItem("labName", lab.labName)
            localStorage.setItem("labPrice", '$1200')
        }
    }



    setLabDetails(
      labList.find((lab: any) => lab.labId === activeId) ||
        defaultValue,
    );
    activeId ? setDisabled(false) : setDisabled(true);
  };

  const navigate = useNavigate();

  return (
    <BookingTestTemplate
      header={<HeaderLogo variant={"heading5"} />}
      backButton={
        <Buttons
          name="Back"
          variantSize="medium"
          startIcon={<Image src={BackIcon} />}
          onClick={handleClick}
        />
      }
      stepper={
        <Stepper
          activeIndex={0}
          steps={[
            "Lab Test",
            "Select appointment",
            "Add Address",
            "Review Order",
          ]}
        />
      }
      body={<SelectLabList callBack={pullData} labList={labList} />}
      footer={
        <StepperBottomContent
          tab="selectLabTab"
          labName={labDetails.labName}
          testPrice={labDetails.labName ? `$1200 for one test` : undefined}
          buttonName="Select Date & Time"
          onClickButton={() => { navigate('/appointment') }}
        ></StepperBottomContent>
      }
    />
  );
};

export default LabTest;
