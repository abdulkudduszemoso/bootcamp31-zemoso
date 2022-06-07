package org.diagnostics.labmanagementservice.service;

import org.diagnostics.labmanagementservice.entity.Lab;
import org.diagnostics.labmanagementservice.repository.LabRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class LabServiceTest {
    @Autowired
    private LabService labService;

    @MockBean
    private LabRepository labRepository;

    @Test
    void getAllLabs() {
        List<Lab> labs = new ArrayList<>();
        Lab lab = new Lab();

        labs.add(lab);

        when(labRepository.findAll()).thenReturn(labs);

        assertEquals(1, labService.getAllLabs().size());
    }

    @Test
    void getLabById() {
        Lab lab = new Lab(1, "TestName", "TestLoc", 4.5f, 3, "test", 1);
        Optional<Lab> lab1 = Optional.of(lab);

        when(labRepository.findById(1)).thenReturn(lab1);
        assertEquals(1, labService.getLabById(1).getLabId());
    }
}
