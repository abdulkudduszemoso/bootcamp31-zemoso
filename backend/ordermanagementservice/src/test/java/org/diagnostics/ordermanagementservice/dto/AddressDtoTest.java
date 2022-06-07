package org.diagnostics.ordermanagementservice.dto;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class AddressDtoTest {

    @Test
    void addressDtoTest(){
        AddressDto addressDto = new AddressDto();
        addressDto.setArea("California");
        assertEquals("California", addressDto.getArea());
    }

    @Test
    void toStringAddressDtoTest(){
        assertFalse(new AddressDto().toString().contains("@"));
    }
}
