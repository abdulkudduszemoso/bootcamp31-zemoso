package org.diagnostics.ordermanagementservice.dto;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class PatientDTOTest {
    @Test
    void patientDTOTest() {
        PatientDTO patientDTO = new PatientDTO();
        patientDTO.setPatientName("Test");

        assertEquals("Test", patientDTO.getPatientName());
    }
}
