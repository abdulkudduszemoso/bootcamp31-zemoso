package org.diagnostics.ordermanagementservice.controller;

import org.diagnostics.ordermanagementservice.dto.AddressDto;
import org.diagnostics.ordermanagementservice.dto.PatientDTO;
import org.diagnostics.ordermanagementservice.service.AddressService;
import org.diagnostics.ordermanagementservice.service.PatientService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class OrderManagementControllerTest {

    @Autowired
    private OrderManagementController orderManagementController;

    @MockBean
    private AddressService addressService;

    @MockBean
    private PatientService patientService;

    @Test
    void getAllAddress(){
        List<AddressDto> addressDtoList = new ArrayList<>();
        AddressDto addressDto = new AddressDto();
        addressDtoList.add(addressDto);
        when(addressService.getAllAddresses()).thenReturn(addressDtoList);
        assertEquals(1, orderManagementController.getAddressList().size());
    }
    @Test
    void getAddress(){
        AddressDto addressDto = new AddressDto(1, "123", "Rajasthan", "Jodhpur", "Tel", 342001, 1);
        when(addressService.getAddress(1)).thenReturn(addressDto);
        assertEquals(1, orderManagementController.getAddress(1).getAddressId());
    }
    @Test
    void addAddress(){
     AddressDto addressDto = new AddressDto();
     doNothing().when(addressService).saveAddress(addressDto);
     assertEquals(new ResponseEntity<String>("Created Successfully", HttpStatus.CREATED), orderManagementController.postAddress(addressDto));
    }

    @Test
    void getAllPatients() {
        List<PatientDTO> patients = new ArrayList<>();

        patients.add(new PatientDTO());

        when(patientService.getAllPatients()).thenReturn(patients);
        assertEquals(1, orderManagementController.getAllPatients().size());
    }

    @Test
    void getPatientById() {
        PatientDTO patientDTO = new PatientDTO(1, 1, "test", "23/02/2000", "Male", "Self");

        when(patientService.getPatientById(1)).thenReturn(patientDTO);

        assertEquals(patientDTO, orderManagementController.getPatientById(1));
    }

    @Test
    void savePatient() {
        PatientDTO patientDTO = new PatientDTO(1, 1, "test", "23/02/2000", "Male", "Self");
        doNothing().when(patientService).save(patientDTO);
        assertEquals(new ResponseEntity<String>("Created successfully.", HttpStatus.CREATED), orderManagementController.savePatient(patientDTO));
    }

    @Test
    void updatePatient() {
        PatientDTO patientDTO = new PatientDTO(1, 1, "test", "23/02/2000", "Male", "Self");
        patientDTO.setPatientName("Testingggg");
        doNothing().when(patientService).save(patientDTO);
        assertEquals(new ResponseEntity<String>("Updated successfully.", HttpStatus.CREATED), orderManagementController.updatePatient(patientDTO, 1));
    }
}
