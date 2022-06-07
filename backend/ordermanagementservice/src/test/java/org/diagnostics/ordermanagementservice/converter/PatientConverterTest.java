package org.diagnostics.ordermanagementservice.converter;

import org.diagnostics.ordermanagementservice.dto.PatientDTO;
import org.diagnostics.ordermanagementservice.entity.Patient;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class PatientConverterTest {
    @Test
    void dtoToEntityTest() {
        PatientDTO patientDTO = new PatientDTO();
        patientDTO.setPatientName("Gopi");
        Patient patient = new PatientConverter().dtoToEntity(patientDTO);
        assertEquals("Gopi", patient.getPatientName());
    }

    @Test
    void entityToDTOTest() {
        Patient patient = new Patient();
        patient.setPatientName("Gopi");

        PatientDTO patientDTO = new PatientConverter().entityToDTO(patient);
        assertEquals("Gopi", patientDTO.getPatientName());
    }

    @Test
    void entityToDTOListTest() {
        List<Patient> patients = new ArrayList<>();
        Patient patient = new Patient();

        patients.add(patient);
        List<PatientDTO> patientsDTO = new PatientConverter().entityToDTO(patients);

        assertEquals(1, patientsDTO.size());
    }
}
