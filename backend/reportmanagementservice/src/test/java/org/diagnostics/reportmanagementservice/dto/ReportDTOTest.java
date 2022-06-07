package org.diagnostics.reportmanagementservice.dto;

import org.diagnostics.reportmanagementservice.entity.Report;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
 class ReportDTOTest {
    @Test
    void reportDtoTestId() {
        ReportDto reportDto = new ReportDto();

        reportDto.setReportId(1);

        assertEquals(1, reportDto.getReportId());
    }

    @Test
    void reportDtoTestLabName() {
        ReportDto reportDto = new ReportDto();

        reportDto.setLabName("ABC LABS");

        assertEquals("ABC LABS", reportDto.getLabName());
    }

    @Test
    void reportDtoTestTestName() {
        ReportDto reportDto = new ReportDto();

        reportDto.setTestName("COVID RTPCR");

        assertEquals("COVID RTPCR", reportDto.getTestName());
    }

    @Test
    void reportDtoTestReportStatus() {
        ReportDto reportDto = new ReportDto();

        reportDto.setReportStatus("Done");

        assertEquals("Done", reportDto.getReportStatus());
    }

    @Test
    void reportDtoTestReportDownload() {
        ReportDto reportDto = new ReportDto();

        reportDto.setReportDownload("http://zemoso.com");

        assertEquals("http://zemoso.com", reportDto.getReportDownload());
    }

    @Test
    void reportDtoTestReportTime() {
        ReportDto reportDto = new ReportDto();

        reportDto.setReportTime("2PM");

        assertEquals("2PM", reportDto.getReportTime());
    }

    @Test
    void reportDtoTestCreatedAt() {
        ReportDto reportDto = new ReportDto();

        reportDto.setCreatedAt("5AM");

        assertEquals("5AM", reportDto.getCreatedAt());
    }

    @Test
    void reportDtoTestUpdatedBy() {
        ReportDto reportDto = new ReportDto();

        reportDto.setUpdatedBy(1);

        assertEquals(1, reportDto.getUpdatedBy());
    }

    @Test
    void ReportTestToString() {
        ReportDto reportDto = new ReportDto(1,"ABC LABS","COVID RTPCR","Process","https://zemosolabs.com","2pm","1pm",1);

        String str = "ReportDto(reportId=1, labName=ABC LABS, testName=COVID RTPCR, reportStatus=Process, reportDownload=https://zemosolabs.com, reportTime=2pm, createdAt=1pm, updatedBy=1)";

        assertEquals(str, reportDto.toString());
    }
}
