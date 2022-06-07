import { PatientDetails } from "../../components/organisms/AddPatient"
import updatePatientService from "../../service/updatePatient"

export const updatePatient = (data: PatientDetails) => {
    let url = '/patients/'+data.id
    updatePatientService(url, data)
}