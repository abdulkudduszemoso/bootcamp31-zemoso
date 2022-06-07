import { useEffect, useState } from "react";
import getPatientsService from "../../../service/getPatients";
import updatePatientService from "../../../service/updatePatient";
import { PatientDetails } from "../AddPatient";

export const getAllPatients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        getPatientsService("orders/patients").then((res) => { setPatients(res) }).catch((err) => {throw err; })
    }, [])

    return patients;
}

export const updatePatient = (data: PatientDetails) => {
    let url = '/patients/'+data.id
    updatePatientService(url, data)
}