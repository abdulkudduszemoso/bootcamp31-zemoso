package org.diagnostics.reportmanagementservice.entity;


import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
 class ReportEntityTest {
    @Test
    void reportTestId() {
        Report report = new Report();

        report.setReportId(1);

        assertEquals(1, report.getReportId());
    }

    @Test
    void ReportTestLabName() {
        Report report = new Report();

        report.setLabName("ABC LABS");

        assertEquals("ABC LABS", report.getLabName());
    }

    @Test
    void ReportTestTestName() {
        Report report = new Report();

        report.setTestName("COVID RTPCR");

        assertEquals("COVID RTPCR", report.getTestName());
    }

    @Test
    void ReportTestReportStatus() {
        Report report = new Report();

        report.setReportStatus("Done");

        assertEquals("Done", report.getReportStatus());
    }

    @Test
    void ReportTestReportDownload() {
        Report report = new Report();

        report.setReportDownload("http://zemoso.com");

        assertEquals("http://zemoso.com", report.getReportDownload());
    }

    @Test
    void ReportTestReportTime() {
        Report report = new Report();

        report.setReportTime("2PM");

        assertEquals("2PM", report.getReportTime());
    }

    @Test
    void ReportTestCreatedAt() {
        Report report = new Report();

        report.setCreatedAt("5AM");

        assertEquals("5AM", report.getCreatedAt());
    }

    @Test
    void ReportTestUpdatedBy() {
        Report report = new Report();

        report.setUpdatedBy(1);

        assertEquals(1, report.getUpdatedBy());
    }


    @Test
    void ReportTestToString() {
        Report report = new Report(1,"ABC LABS","COVID RTPCR","Process","https://zemosolabs.com","2pm","1pm",1);

        String str = "Report(reportId=1, labName=ABC LABS, testName=COVID RTPCR, reportStatus=Process, reportDownload=https://zemosolabs.com, reportTime=2pm, createdAt=1pm, updatedBy=1)";

        assertEquals(str, report.toString());
    }

}
