package org.diagnostics.reportmanagementservice.repository;

import org.diagnostics.reportmanagementservice.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Report, Integer> {
}

