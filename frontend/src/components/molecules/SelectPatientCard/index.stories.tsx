import React from "react";
import SelectPatientCard from ".";

export default{
    title:"Molecules/Select Patient Card",
    component: SelectPatientCard
}

export const Default = () => <SelectPatientCard 
patientName={"Patrick Smith"} 
relation={"Self"} 
gender={"Male"} 
age={"30 years"}></SelectPatientCard>