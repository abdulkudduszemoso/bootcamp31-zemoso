package org.diagnostics.ordermanagementservice.service;

import org.diagnostics.ordermanagementservice.dto.AddressDto;

import java.util.List;

public interface AddressService {

    List<AddressDto> getAllAddresses();
    AddressDto getAddress(int id);
    void saveAddress(AddressDto addressDto);

    void updateAddress(AddressDto addressDto, int id);
}
