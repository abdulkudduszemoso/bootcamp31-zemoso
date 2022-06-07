import { reportBaseURL } from ".";
import { PatientDetails } from "../components/organisms/AddPatient";

const updatePatientService = async (url: string, data: PatientDetails) => {
    await reportBaseURL.put(url, data)
}

export default updatePatientService