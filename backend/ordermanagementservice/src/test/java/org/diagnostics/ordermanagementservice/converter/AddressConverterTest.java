package org.diagnostics.ordermanagementservice.converter;

import org.diagnostics.ordermanagementservice.dto.AddressDto;
import org.diagnostics.ordermanagementservice.entity.Address;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class AddressConverterTest {

    @Test
    void dtoToEntityTest(){
        AddressDto addressDto = new AddressDto();
        addressDto.setArea("California");
        Address address = new AddressConverter().dtoToEntity(addressDto);
        assertEquals("California", address.getArea());
    }

    @Test
    void entityToDTOTest(){
        Address address = new Address();
        address.setArea("California");
        AddressDto addressDto = new AddressConverter().entityToDto(address);
        assertEquals("California", addressDto.getArea());
    }

    @Test
    void entityToDtoListTest(){
        List<Address> addressList =  new ArrayList<>();
        Address address = new Address();
        addressList.add(address);
        List<AddressDto> addressDtoList = new AddressConverter().entityToDto(addressList);
        assertEquals(1, addressDtoList.size());
    }
}
