package org.diagnostics.reportmanagementservice.controller;


import org.diagnostics.reportmanagementservice.converter.ReportConverter;
import org.diagnostics.reportmanagementservice.dto.ReportDto;
import org.diagnostics.reportmanagementservice.service.ReportsService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
 class ReportManagementControllerTest {

    @Autowired
    private ReportManagementController reportManagementController;

    @MockBean
    private ReportsService reportsService;

    @Test
    void getAllReports(){
        List<ReportDto> reportDtos = new ArrayList<>();
        ReportDto reportDto = new ReportDto();
        reportDtos.add(reportDto);
        when(reportsService.getAllReports()).thenReturn(reportDtos);
        assertEquals(1, reportManagementController.getReportsList().size());
    }

    @Test
    void getReportByStatus(){
        ReportDto obj = new ReportDto(1,"Test", "COVID_RTPCR", "Generated", "Mon", "6:00", "", 1);
        List<ReportDto> list = new ArrayList<>();
        list.add(obj);
        when(reportsService.getReportsByStatus("Generated")).thenReturn(list);
        assertEquals(list, reportManagementController.getReportsByStatus("Generated"));

    }

    @Test
    void saveReport(){
        ReportDto obj = new ReportDto(1,"Test", "COVID_RTPCR", "Generated", "Mon", "6:00", "", 1);

        when(reportsService.save(obj)).thenReturn(new ReportConverter().dtoToEntity(obj));

        assertEquals(obj, reportManagementController.saveReport(obj));

    }


}
