package org.diagnostics.ordermanagementservice.service.implementation;

import org.diagnostics.ordermanagementservice.converter.PatientConverter;
import org.diagnostics.ordermanagementservice.dto.PatientDTO;
import org.diagnostics.ordermanagementservice.entity.Patient;
import org.diagnostics.ordermanagementservice.repository.PatientRepository;
import org.diagnostics.ordermanagementservice.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientServiceImplementation implements PatientService {
    @Autowired
    private PatientRepository patientRepository;

    @Override
    public List<PatientDTO> getAllPatients() {
        List<Patient> patients = patientRepository.findAll();

        return new PatientConverter().entityToDTO(patients);
    }

    @Override
    public PatientDTO getPatientById(int id) {
        Optional<Patient> patient = patientRepository.findById(id);
        Patient patient1 = null;
        if(patient.isEmpty()){
            throw new PatientException("Not found");
        }
        patient1 = patient.get();
        return new PatientConverter().entityToDTO(patient1);
    }

    @Override
    public void save(PatientDTO patientDTO) {
        patientRepository.save(new PatientConverter().dtoToEntity(patientDTO));
    }
}
