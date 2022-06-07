package org.diagnostics.reportmanagementservice.service;

import org.diagnostics.reportmanagementservice.dto.ReportDto;
import org.diagnostics.reportmanagementservice.entity.Report;

import java.util.List;

public interface ReportsService {
    List<ReportDto> getAllReports();
    List<ReportDto> getReportsByStatus(String status);

    Report save(ReportDto reportDto);
}
