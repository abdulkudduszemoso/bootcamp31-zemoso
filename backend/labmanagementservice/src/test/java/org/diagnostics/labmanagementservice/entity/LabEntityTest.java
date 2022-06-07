package org.diagnostics.labmanagementservice.entity;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class LabEntityTest {
    @Test
    void labEntityTest() {
        Lab lab = new Lab();
        lab.setLabLocation("India");
        assertEquals("India", lab.getLabLocation());
    }
}
