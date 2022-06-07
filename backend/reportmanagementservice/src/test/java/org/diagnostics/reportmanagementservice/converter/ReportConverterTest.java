package org.diagnostics.reportmanagementservice.converter;


import org.diagnostics.reportmanagementservice.dto.ReportDto;
import org.diagnostics.reportmanagementservice.entity.Report;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
 class ReportConverterTest {
    @Test
    void dtoToEntityTest() {
        ReportDto reportDto = new ReportDto();
        reportDto.setLabName("Test");


        Report report = new ReportConverter().dtoToEntity(reportDto);
        assertEquals("Test", report.getLabName());
    }

    @Test
    void entityToDTOTest() {
        Report report = new Report();
        report.setReportStatus("Success");

        ReportDto reportDto = new ReportConverter().entityToDto(report);
        assertEquals("Success", reportDto.getReportStatus());
    }

    @Test
    void entityToDTOListTest() {
        List<Report> reports = new ArrayList<>();

        Report report = new Report();

        reports.add(report);

        List<ReportDto> reportDtos = new ReportConverter().entityToDto(reports);

        assertEquals(1, reportDtos.size());
    }
}
