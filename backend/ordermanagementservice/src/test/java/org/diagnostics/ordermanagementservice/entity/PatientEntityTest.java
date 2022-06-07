package org.diagnostics.ordermanagementservice.entity;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class PatientEntityTest {
    @Test
    void patientEntityTest() {
        Patient patient = new Patient();
        patient.setPatientName("Gopi");
        assertEquals("Gopi", patient.getPatientName());
    }
}
