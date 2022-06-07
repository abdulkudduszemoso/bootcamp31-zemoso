package org.diagnostics.labmanagementservice.repository;

import org.diagnostics.labmanagementservice.entity.Lab;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LabRepository extends JpaRepository<Lab, Integer> {

}
