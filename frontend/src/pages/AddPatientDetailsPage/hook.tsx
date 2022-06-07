import { PatientDetails } from '../../components/organisms/AddPatient';
import addPatientService from '../../service/addPatient';

export const addPatient = (patient: PatientDetails) => {
    const response = addPatientService(patient)  
    return response;
}