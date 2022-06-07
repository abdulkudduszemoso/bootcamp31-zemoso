package org.diagnostics.ordermanagementservice.repository;

import org.diagnostics.ordermanagementservice.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Integer> {

}
