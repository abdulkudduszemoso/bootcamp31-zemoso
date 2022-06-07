package org.diagnostics.labmanagementservice.service;

import org.diagnostics.labmanagementservice.dto.LabDTO;

import java.util.List;

public interface LabService {
    List<LabDTO> getAllLabs();
    LabDTO getLabById(int id);
}
