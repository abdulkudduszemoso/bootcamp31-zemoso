package org.diagnostics.ordermanagementservice.Exception;

import org.diagnostics.ordermanagementservice.service.implementation.AddressException;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

 class AddressExceptionTest {

    String message = "Test";


    AddressException obj = new AddressException(message);


    @Test
     void testException() {

        assertEquals("Test",obj.getMessage());
    }
}
