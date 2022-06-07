package org.diagnostics.labmanagementservice.service;

import org.diagnostics.labmanagementservice.converter.LabConverter;
import org.diagnostics.labmanagementservice.dto.LabDTO;
import org.diagnostics.labmanagementservice.entity.Lab;
import org.diagnostics.labmanagementservice.exception.LabServiceException;
import org.diagnostics.labmanagementservice.repository.LabRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LabServiceImplementation implements LabService {
    @Autowired
    private LabRepository labRepository;


    @Override
    public List<LabDTO> getAllLabs() {
        List<Lab> labs = labRepository.findAll();


            return new LabConverter().entityToDTO(labs);




    }

    @Override
    public LabDTO getLabById(int id) {
        Optional<Lab> lab = labRepository.findById(id);

        if(lab.isPresent()) {
            return new LabConverter().entityToDTO(lab.get());
        }

        else {
            throw new LabServiceException("Not Found");
        }
    }
}
