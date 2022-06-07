package org.diagnostics.labmanagementservice.controller;

import org.diagnostics.labmanagementservice.dto.LabDTO;
import org.diagnostics.labmanagementservice.service.LabService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class LabManagementControllerTest {
    @MockBean
    private LabService labService;

    @Autowired
    private LabManagementController labManagementController;

    @Test
    void getAllLabs() {
        List<LabDTO> labs = new ArrayList<>();

        labs.add(new LabDTO());

        when(labService.getAllLabs()).thenReturn(labs);
        assertEquals(1, labManagementController.getAllLabs().size());
    }

    @Test
    void getLabById() {
        LabDTO labDTO = new LabDTO(1, "TestName", "TestLoc", 4.5f, 4, "23/02/2000", 1);

        when(labService.getLabById(1)).thenReturn(labDTO);

        assertEquals(labDTO, labManagementController.getLabById(1));
    }
}
