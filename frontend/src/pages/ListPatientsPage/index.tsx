import React, { useState } from "react";
import Stepper from "../../components/molecules/Stepper-BreadCrumb/index";
import StepperBottomContent from "../../components/molecules/StepperBottomContent/index";
import SelectPatientsList from "../../components/organisms/SelectPatientsList";
import {useNavigate} from 'react-router-dom';
import Buttons from "../../components/atoms/Button/index";
import HeaderLogo from "../../components/molecules/HeaderLogo";
import BookingTestTemplate from "../../components/templates/BookingTemplate";
import Image from "../../components/atoms/Image/index";
import BackIcon from "../../../public/assets/images/back.svg";
import { PatientDetails } from "../../components/organisms/AddPatient/index";


const ListPatientDetailsPage = () => {
  let navigate = useNavigate();

  let [count, setCount] = useState(0)

  const handleClick = (data: PatientDetails) => {
      if(data.selected) {
          data.selected = false;
          if(count !== 0) {
            setCount(count - 1)
          }
          
          localStorage.setItem("patient", "")
      }

      else {
          data.selected = true;
          setCount(count + 1)
          localStorage.setItem("patient", JSON.stringify(data))
      }
  }

  return (
    <div>
      <BookingTestTemplate
        header={<HeaderLogo variant="heading5" />}
        backButton={
          <Buttons
            name="Back"
            variantSize="medium"
            startIcon={<Image src={BackIcon} />}
            onClick={() => navigate('/add-patient')}
          />
        }
        stepper={
          <Stepper
            activeIndex={2}
            steps={["Home", "COVID RTPCR", "Add Patient"]}
          />
        }
        body={<SelectPatientsList handleClick={handleClick} />}
        footer={
          <StepperBottomContent
            tab="selectPatientTab"
            buttonName="Select Lab"
            totalNumberOfPatientsSelected={count.toString()}
            onClickButton={() => { navigate('/lab-test') }}
          />
        }
        xsBackButton = {4}
        xsStepper = {8}
      />
    </div>
  );
};

export default ListPatientDetailsPage;
