package org.diagnostics.ordermanagementservice.controller;


import org.diagnostics.ordermanagementservice.dto.AddressDto;
import org.diagnostics.ordermanagementservice.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.diagnostics.ordermanagementservice.dto.PatientDTO;
import org.diagnostics.ordermanagementservice.service.PatientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("v1/orders")
public class OrderManagementController {
    @Autowired
    private AddressService addressService;

    @Autowired
    private PatientService patientService;

    @GetMapping("/address")
    public List<AddressDto> getAddressList(){
        return addressService.getAllAddresses();
    }

    @GetMapping("/address/{id}")
    public  AddressDto getAddress(@PathVariable("id") int id) {
        return addressService.getAddress(id);
    }


    @GetMapping("/patients")
    public List<PatientDTO> getAllPatients() {
        return patientService.getAllPatients();
    }

    @GetMapping("/patients/{id}")
    public PatientDTO getPatientById(@PathVariable("id") int id) {
        return patientService.getPatientById(id);
    }

    @PostMapping("/patients")
    public ResponseEntity<String> savePatient(@RequestBody PatientDTO patientDTO) {
        patientService.save(patientDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("Created successfully.");
    }

    @PutMapping("/patients/{id}")
    public ResponseEntity<String> updatePatient(@RequestBody PatientDTO patientDTO, @PathVariable("id") int id) {
        patientService.save(patientDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("Updated successfully.");
    }

    @PostMapping("/address")
    public ResponseEntity<String> postAddress(@RequestBody AddressDto addressDto){
        addressService.saveAddress(addressDto);
        return ResponseEntity.status(HttpStatus.CREATED).body("Created Successfully");
    }

    @PutMapping("/address/{id}")
    public ResponseEntity<String> updateAddress(@RequestBody @Valid AddressDto addressDto, @PathVariable("id") int id) {
        addressService.updateAddress(addressDto, id);
        return ResponseEntity.status(HttpStatus.CREATED).body("Updated Successfully");
    }
}
