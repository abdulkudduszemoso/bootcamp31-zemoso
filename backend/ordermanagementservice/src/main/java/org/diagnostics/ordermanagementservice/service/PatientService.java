package org.diagnostics.ordermanagementservice.service;

import org.diagnostics.ordermanagementservice.dto.PatientDTO;

import java.util.List;

public interface PatientService {
    List<PatientDTO> getAllPatients();
    PatientDTO getPatientById(int id);
    void save(PatientDTO patientDTO);
}
