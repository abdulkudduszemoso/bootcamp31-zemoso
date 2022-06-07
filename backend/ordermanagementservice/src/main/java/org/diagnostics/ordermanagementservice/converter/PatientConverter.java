package org.diagnostics.ordermanagementservice.converter;

import org.diagnostics.ordermanagementservice.dto.PatientDTO;
import org.diagnostics.ordermanagementservice.entity.Patient;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class PatientConverter {
    private final ModelMapper mapper = new ModelMapper();

    public Patient dtoToEntity(PatientDTO patientDTO) {
        return mapper.map(patientDTO, Patient.class);
    }

    public PatientDTO entityToDTO(Patient patient) {
        return mapper.map(patient, PatientDTO.class);
    }

    public List<PatientDTO> entityToDTO(List<Patient> patients) {
        return patients.stream().map(this::entityToDTO).collect(Collectors.toList());
    }
}
