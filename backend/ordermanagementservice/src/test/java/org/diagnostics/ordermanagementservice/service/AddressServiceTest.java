package org.diagnostics.ordermanagementservice.service;

import org.diagnostics.ordermanagementservice.converter.AddressConverter;
import org.diagnostics.ordermanagementservice.entity.Address;
import org.diagnostics.ordermanagementservice.repository.AddressRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
class AddressServiceTest {

    @Autowired
    private AddressService addressService;

    @MockBean
    private AddressRepository addressRepository;

    @Test
    void getAllAddress(){
        List<Address> addressList = new ArrayList<>();
        Address address = new Address();
        addressList.add(address);
        when(addressRepository.findAll()).thenReturn(addressList);
        assertEquals(1, addressService.getAllAddresses().size());
    }

    @Test
    void getAddress(){
        Address address = new Address(1, "123", "Rajasthan", "Jodhpur", "Tel", 342001, 1);
        Optional<Address> address1 = Optional.of(address);
        when(addressRepository.findById(1)).thenReturn(address1);
        assertEquals(1, addressService.getAddress(1).getAddressId());
    }
    @Test
    void postAddress(){
        Address address = new Address(1, "123", "Rajasthan", "Jodhpur", "Tel", 342001, 1);
        addressService.saveAddress(new AddressConverter().entityToDto(address));
        verify(addressRepository,times(1)).save(any());
    }
}
