package org.diagnostics.ordermanagementservice.Exception;

import org.diagnostics.ordermanagementservice.service.implementation.PatientException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

 class PatientExceptionTest {

    String message = "Test";


    PatientException obj = new PatientException(message);


    @Test
     void testException() {

        assertEquals("Test",obj.getMessage());
    }
}
