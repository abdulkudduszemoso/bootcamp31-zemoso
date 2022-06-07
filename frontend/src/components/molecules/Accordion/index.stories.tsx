import React from "react";
import Accordion from ".";
import InfoIcon from '../../../../public/assets/images/info.svg';

export default{
    title: "Molecules/Accordion",
    component: Accordion
}

export const Default = () => <Accordion 
heading={"Instructions"} 
information={"Please don't eat or drink anything other than water for  8 -10 hours prior to the appointment."} 
icon={InfoIcon}></Accordion>;