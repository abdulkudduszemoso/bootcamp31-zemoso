package org.diagnostics.ordermanagementservice.entity;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class AddressEntityTest {

    @Test
    void addressEntityTest(){
        Address address = new Address();
        address.setArea("California");
        assertEquals("California", address.getArea());
    }

    @Test
    void toStringAddressEntityTest(){
        assertFalse(new Address().toString().contains("@"));
    }
}
