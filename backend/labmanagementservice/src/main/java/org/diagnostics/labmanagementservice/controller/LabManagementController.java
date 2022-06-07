package org.diagnostics.labmanagementservice.controller;

import org.diagnostics.labmanagementservice.dto.LabDTO;
import org.diagnostics.labmanagementservice.service.LabService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("v1/labs")
public class LabManagementController {
    @Autowired
    private LabService labService;

    @GetMapping()
    public List<LabDTO> getAllLabs() {
        return labService.getAllLabs();
    }
    @GetMapping("/{id}")
    public LabDTO getLabById(@PathVariable("id") int id) {
        return labService.getLabById(id);
    }
}
