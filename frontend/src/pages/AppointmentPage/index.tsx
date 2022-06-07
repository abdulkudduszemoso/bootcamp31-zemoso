import React, { useState } from "react";
import Buttons from "../../components/atoms/Button/index";
import Image from "../../components/atoms/Image/index";
import HeaderLogo from "../../components/molecules/HeaderLogo";
import Stepper from "../../components/molecules/Stepper-BreadCrumb/index";
import StepperBottomContent from "../../components/molecules/StepperBottomContent/index";
import BackIcon from "../../../public/assets/images/back.svg";
import BookingTestTemplate from "../../components/templates/BookingTemplate/index";
import SelectAppointment from "../../components/organisms/SelectAppointment";
import {Days, Time, Months} from '../../utils/constants'

const Appointment = () => {
  const handleClick = () => {
    localStorage.setItem("day", `${Days[selectedDate].day}, ${Months[selectedMonth].month.substring(0, 3)} ${Days[selectedDate].date}, 2022`)
    localStorage.setItem("time", `${Time[selectedMonth].time}`)
    location.href = "/add-address";
  };

  const handleBackClick = () => {
    location.href = '/lab-test';
  }

  const [selectedMonth, setSelectedMonth] = useState(-1)
  const [selectedDate, setSelectedDate] = useState(-1)
  const [selectedTime, setSelectedTime] = useState(-1)

  const monthSelected = (key: number) => {
      setSelectedMonth(key)
  }
  
  const dateSelected = (key: number) => {
      setSelectedDate(key)
  }

  const timeSelected = (key: number) => {
      setSelectedTime(key)
  }

  return (
    <BookingTestTemplate
      header={<HeaderLogo variant={"heading5"} />}
      body={<SelectAppointment monthSelected={monthSelected} dateSelected={dateSelected} timeSelected={timeSelected} 
      selectedMonth={selectedMonth} selectedDate={selectedDate} selectedTime={selectedTime} />}
      backButton={
        <Buttons
          name="Back"
          variantSize="medium"
          startIcon={<Image src={BackIcon} />}
          onClick={() => handleBackClick()}
        />
      }
      stepper={
        <Stepper
          activeIndex={1}
          steps={[
            "Lab Test",
            "Select appointment",
            "Add Address",
            "Review Order",
          ]}
        ></Stepper>
      }
      footer={
        <StepperBottomContent
          tab="selectAppointmentTab"
          appointmentTime = {selectedDate !== -1 && selectedTime !== -1 && selectedMonth !== -1 ? (`${Months[selectedMonth].month} ${Days[selectedDate].day} 
          ${Days[selectedDate].date}, 
          ${Time[selectedTime].time}`) : ''}
          buttonName="Add Address"
          onClickButton={handleClick}
        ></StepperBottomContent>
      }
    />
  );
};

export default Appointment;
