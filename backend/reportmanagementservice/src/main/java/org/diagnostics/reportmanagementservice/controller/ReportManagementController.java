package org.diagnostics.reportmanagementservice.controller;


import org.diagnostics.reportmanagementservice.dto.ReportDto;

import org.diagnostics.reportmanagementservice.service.ReportsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("v1/reports")
public class ReportManagementController {

    @Autowired
    private ReportsService reportsService;

    @GetMapping()
    public List<ReportDto> getReportsList(){
        return reportsService.getAllReports();
    }

    @GetMapping("/{status}")
    public List<ReportDto> getReportsByStatus(@PathVariable("status") String status){
        return reportsService.getReportsByStatus(status);
    }

    @PostMapping()
    public ReportDto saveReport(@RequestBody ReportDto reportDto) {
        reportsService.save(reportDto);
        return reportDto;
    }
}
