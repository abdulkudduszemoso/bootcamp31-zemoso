package org.diagnostics.labmanagementservice.converter;

import org.diagnostics.labmanagementservice.dto.LabDTO;
import org.diagnostics.labmanagementservice.entity.Lab;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class LabConverterTest {
    @Test
    void dtoToEntityTest() {
        LabDTO labDTO = new LabDTO();
        labDTO.setLabName("Test");

        Lab lab = new LabConverter().dtoToEntity(labDTO);
        assertEquals("Test", lab.getLabName());
    }

    @Test
    void entityToDTOTest() {
        Lab lab = new Lab();
        lab.setLabLocation("India");

        LabDTO labDTO = new LabConverter().entityToDTO(lab);
        assertEquals("India", labDTO.getLabLocation());
    }

    @Test
    void entityToDTOListTest() {
        List<Lab> labs = new ArrayList<>();

        Lab lab = new Lab();

        labs.add(lab);

        List<LabDTO> labsDTO = new LabConverter().entityToDTO(labs);

        assertEquals(1, labsDTO.size());
    }
}
