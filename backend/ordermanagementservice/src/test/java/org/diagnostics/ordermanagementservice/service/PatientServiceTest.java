package org.diagnostics.ordermanagementservice.service;

import org.diagnostics.ordermanagementservice.converter.PatientConverter;
import org.diagnostics.ordermanagementservice.dto.PatientDTO;
import org.diagnostics.ordermanagementservice.entity.Patient;
import org.diagnostics.ordermanagementservice.repository.PatientRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
class PatientServiceTest {
    @Autowired
    private PatientService patientService;

    @MockBean
    private PatientRepository patientRepository;

    @Test
    void getAllPatients() {
        List<Patient> patients = new ArrayList<>();
        Patient patient = new Patient();

        patients.add(patient);

        when(patientRepository.findAll()).thenReturn(patients);

        assertEquals(1, patientService.getAllPatients().size());
    }

    @Test
    void getPatient() {
        Patient patient = new Patient(1, 1,  "Gopi", "23/02/2000", "Male", "Self");
        Optional<Patient> patient1 = Optional.of(patient);

        when(patientRepository.findById(1)).thenReturn(patient1);
        assertEquals(1, patientService.getPatientById(1).getPatientId());
    }

    @Test
    void savePatient() {
        Patient patient = new Patient(1, 1,  "Gopi", "23/02/2000", "Male", "Self");
        PatientDTO patientDTO = new PatientConverter().entityToDTO(patient);

        patientService.save(patientDTO);

        verify(patientRepository, times(1)).save(any());
    }
}
