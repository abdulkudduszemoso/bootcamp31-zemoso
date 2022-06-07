package org.diagnostics.ordermanagementservice.repository;

import org.diagnostics.ordermanagementservice.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Integer> {
}
