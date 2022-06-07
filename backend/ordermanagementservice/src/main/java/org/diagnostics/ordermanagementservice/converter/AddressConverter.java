package org.diagnostics.ordermanagementservice.converter;

import org.diagnostics.ordermanagementservice.dto.AddressDto;
import org.diagnostics.ordermanagementservice.entity.Address;
import org.springframework.stereotype.Component;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class AddressConverter {

    private final ModelMapper mapper = new ModelMapper();

    public Address dtoToEntity(AddressDto addressDto){
        return mapper.map(addressDto, Address.class);
    }

    public AddressDto entityToDto(Address address){
        return mapper.map(address, AddressDto.class);
    }

    public List<AddressDto> entityToDto(List<Address> addressList){
        return addressList.stream().map(this::entityToDto).collect(Collectors.toList());
    }
}
