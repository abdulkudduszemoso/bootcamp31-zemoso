package org.diagnostics.reportmanagementservice.service;


import org.diagnostics.reportmanagementservice.converter.ReportConverter;
import org.diagnostics.reportmanagementservice.dto.ReportDto;
import org.diagnostics.reportmanagementservice.entity.Report;
import org.diagnostics.reportmanagementservice.repository.ReportRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
 class ReportServiceTest {
    @Autowired
    private ReportsService reportsService;

    @MockBean
    private ReportRepository reportRepository;

    @Test
    void getAllReports() {
        List<Report> reports = new ArrayList<>();
        Report report = new Report();

        reports.add(report);

        when(reportRepository.findAll()).thenReturn(reports);

        assertEquals(1, reportRepository.findAll().size());
    }

    @Test
    void getReportByStatus() {
        Report report = new Report(1,"ABC LABS","COVID RTPCR","Process","https://zemosolabs.com","2pm","1pm",1);
        reportsService.save(new ReportConverter().entityToDto(report));


        List<ReportDto> reportDtos = reportsService.getReportsByStatus("Done");

        assertEquals(0, reportDtos.size());
    }
}
