import React from "react";
import Stepper from "../../components/molecules/Stepper-BreadCrumb/index";
import AddPatient, {
  PatientDetails,
} from "../../components/organisms/AddPatient/index";
import StepperBottomContent from "../../components/molecules/StepperBottomContent/index";
import BackIcon from "../../../public/assets/images/back.svg";
import { addPatient } from "./hook";
import BookingTestTemplate from "../../components/templates/BookingTemplate";
import HeaderLogo from "../../components/molecules/HeaderLogo";
import Buttons from "../../components/atoms/Button/index";
import Image from "../../components/atoms/Image/index";

const buttonClick = async () => {
  const name = localStorage.getItem("name");
  const DOB: any = localStorage.getItem("date");
  const relation =
    localStorage.getItem("relation") === "Myself"
      ? "Self"
      : localStorage.getItem("relation");
  const gender = localStorage.getItem("gender");

  const date: any = new Date(DOB);

  const difference: any = Date.now() - date;
  const age: any = new Date(difference);
  const finalAge = Math.abs(age.getUTCFullYear() - 1970).toString();


  const patient: PatientDetails = {
    patientName: name,
    gender: gender,
    dob: finalAge,
    relation: relation,
    userId: 1
  };

  await addPatient(patient).then((res) => { location.href = '/patient-details' })
  .catch((err) => console.log(err));
};

const backButtonClick = () => {
  location.href = "/test-info";
};

const AddPatientDetailsPage = () => {
  return (
    <div>
      <BookingTestTemplate
        header={<HeaderLogo variant="heading5" />}
        backButton={
          <Buttons
            name="Back"
            variantSize="medium"
            startIcon={<Image src={BackIcon} />}
            onClick={backButtonClick}
          />
        }
        stepper={
          <Stepper
            activeIndex={2}
            steps={["Home", "COVID RTPCR", "Add Patient"]}
          />
        }
        body={<AddPatient />}
        footer={
          <StepperBottomContent
            tab="primary"
            buttonName="Next"
            onClickButton={() => { buttonClick(); }}
          />
        }
        xsBackButton = {4}
        xsStepper = {8}
      />
    </div>
  );
};

export default AddPatientDetailsPage;
