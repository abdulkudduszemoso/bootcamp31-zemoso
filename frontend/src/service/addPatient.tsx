import { PatientDetails } from '../components/organisms/AddPatient';
import {orderBaseURL} from './index';

const addPatientService = async (data: PatientDetails) => {
    const response = await orderBaseURL.post("orders/patients", data)
    return response;
}

export default addPatientService