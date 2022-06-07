package org.diagnostics.labmanagementservice.exception;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

 class LabExceptionTest {
    String message = "Test";
    LabServiceException obj = new LabServiceException(message);
    @Test
    void testException() {

        assertEquals("Test",obj.getMessage());
    }

}
