package org.diagnostics.labmanagementservice.dto;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class LabDTOTest {
    @Test
    void labDTOTest() {
        LabDTO labDTO = new LabDTO();

        labDTO.setLabLocation("India");

        assertEquals("India", labDTO.getLabLocation());
    }
}
