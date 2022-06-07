package org.diagnostics.ordermanagementservice.service.implementation;


import org.diagnostics.ordermanagementservice.converter.AddressConverter;
import org.diagnostics.ordermanagementservice.dto.AddressDto;
import org.diagnostics.ordermanagementservice.entity.Address;
import org.diagnostics.ordermanagementservice.repository.AddressRepository;
import org.diagnostics.ordermanagementservice.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AddressServiceImplementation implements AddressService {

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public List<AddressDto> getAllAddresses(){
        List<Address> addressList = addressRepository.findAll();
        return new AddressConverter().entityToDto(addressList);
    }

    @Override
    public AddressDto getAddress(int id) {
        Optional<Address> address = addressRepository.findById(id);
        Address address1 = null;
        if(address.isEmpty()){
            throw new AddressException("Not found");
        }

        address1 = address.get();
        return new AddressConverter().entityToDto(address1);
    }

    @Override
    public void saveAddress(AddressDto addressDto) {
        addressRepository.save(new AddressConverter().dtoToEntity(addressDto));
    }

    @Override
    public void updateAddress(AddressDto addressDto, int id) {
        if(addressDto != null){
            Address address = addressRepository.getById(id);
            address.setArea(addressDto.getArea());
            address.setCity(addressDto.getCity());
            address.setHouseNo(addressDto.getCity());
            address.setState(addressDto.getState());
            addressRepository.save(address);
        }
        else {
            throw new AddressException("Did not found address with id - "+id);
        }
    }

}